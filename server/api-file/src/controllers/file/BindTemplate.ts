
import Docxtemplater from 'docxtemplater';
import fs from 'fs'
import PizZip from 'pizzip';

export const bind = async (path: string, data: BindTemplateType['data']): Promise<Buffer> => {

    const content: Buffer = await new Promise((resolve, reject) => fs.readFile(path, (err, data) => err ? reject(err) : resolve(data)))

    const zip = new PizZip(content);
    
    try {
        let doc: Docxtemplater;
        doc = new Docxtemplater(zip, { delimiters: { start:'${', end:'}'} });

        //set the templateVariables
        doc.setData(data);
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
        return doc.getZip().generate({type: 'nodebuffer'});
    } catch(e) {
        if (e?.properties?.errors instanceof Array) {
            const errorMessages = e.properties.errors.map(function (error) {
                return error.properties.explanation;
            }).join("\n");
            throw errorMessages
        }
        throw e
    }
}

export type BindTemplateType = {
    file_id: number,
    file_name?: string
    data: Record<string, any>
    extension?: 'pdf' | 'doc'
}
