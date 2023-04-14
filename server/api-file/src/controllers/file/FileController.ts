import { Request, Response } from 'express'
import fs from 'fs'
import stream from 'stream'
import { bind, BindTemplateType } from './BindTemplate'
import { gapi_delete_drive, gapi_download_drive, gapi_init_drive, gapi_upload_drive } from '../../utils/GoogleApiUtils'
import { google } from 'googleapis'
import { buffer_to_stream } from '../../utils/BufferUtils'
import {v4 as uuid} from 'uuid';
import { TFile, TUser, useContextUser } from '@mzara/graphql'
import { getFilePath, saveFile } from './utils/FileUtils'

export const upload = async (req: Request, res: Response) => {

    const { file, body } = req
    
    if (!file) {
        return res.status(400).json({ message: 'NO_FILE_UPLOADED' })
    }

    try {
        const userContext: TUser = await useContextUser()

        const f = new TFile()
        f.name = file.originalname
        f.hash = uuid()
        await f.save()
        await saveFile(f.hash, file.buffer)
        return res.status(200).json({ id: f.id, name: f.name })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'INTERNAL_ERROR' })
    }
}

export const download = async (req: Request, res: Response) => {

    const { id } = req.params

    if (isNaN(parseInt(id))) {
        return res.status(400).json({ message: 'EMPTY_ID' })
    }

    const file = await TFile.findOne({ where: [
        { id: parseInt(id) },
        { hash: id }
    ]})

    const path = getFilePath(file?.hash || '')
    if (!file || !fs.existsSync(path)) {
        return res.status(404).json({ message: 'NOT_FOUND' })
    }

    if (!await file.canRead()) {
        return res.status(403).json({ message: 'FORBIDDEN' })
    }

    fs.readFile(path, (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename=' + file.name,
            'Content-Length': data.length,
            "Cache-Control": "public, max-age=86400",
        });
        res.write(data);
        res.end();
    })
    
}

export const bind_template = async (req: Request<any, any, BindTemplateType>, res: Response) => {

    const { id, data, extension } = req.params

    const file = await TFile.findOne({ where: [
        { id: parseInt(id) },
        { hash: id }
    ]})

    const path = getFilePath(file?.hash || '')
    if (!file || !fs.existsSync(path)) {
        return res.status(404).json({ message: 'NOT_FOUND' })
    }

    if (!await file.canRead()) {
        return res.status(403).json({ message: 'FORBIDDEN' })
    }

    let buf: Buffer
    try {
        buf = await bind(path, data) 
    } catch (e) {
        return res.status(400).json({ message: 'TEMPLATE_BIND_ERROR' })
    }
    const rs = new stream.PassThrough();

    if (extension === 'pdf') {
        const auth = await gapi_init_drive();
        const drive = google.drive({version: 'v3', auth});
        // upload doc file and convert it to google docs file
        const file = await gapi_upload_drive(drive, {
            resource: {
                'name': Math.random().toString(36).substring(2, 9),
                'mimeType': 'application/vnd.google-apps.document',
            },
            media: {
                mimeType: 'application/msword',
                body: buffer_to_stream(buf)
            },
            fields: 'id'
        } as any);

        buf = await gapi_download_drive(drive, {
            fileId: file.id!,
            mimeType: 'application/pdf'
        });

        gapi_delete_drive(drive, { fileId: file.id!, })
    }

    
    // fs.createWriteStream(`${path}-parsed`).write(buf);
    
    rs.end(buf);
    res.set('Content-Description', 'File Transfer');
    res.set('Content-disposition', 'attachment');
    res.set('Content-Type', 'application/octet-stream');

    return rs.pipe(res);
}
