
import fs from 'fs'
import { FILE_REPO } from '../../../Bootstrap'

export const saveFile = (fileName: string, buffer: Buffer) => {

    return new Promise<void>((resolve, reject) => {

        if (!fs.existsSync(FILE_REPO)) {
            fs.mkdirSync(FILE_REPO, { mode: '444' })
        }

        fs.writeFile(getFilePath(fileName), buffer, (err) => {
            if (err) {
                return reject(err)
            }
            resolve()
        })
    })
}

export const getFilePath = (fileName: string) => `${FILE_REPO}/${fileName}`
