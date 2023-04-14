import { drive_v3, google } from 'googleapis'
import fs from 'fs'
import readline from 'readline'

export const get_gapi_token = () => {
    return `src/config/gapi-token.json`
}

export const get_gapi_drive_scope = () => {
    return [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.readonly',
        'https://www.googleapis.com/auth/drive.appdata',
        'https://www.googleapis.com/auth/drive.metadata.readonly'
    ];
}

export const gapi_init_drive = async () => {
    return gapi_authorize(JSON.parse(process.env.GOOGLE_DRIVE_CREDENTIAL!))
}

export const get_gapi_drive_v3 = async () => {
    const auth = await gapi_init_drive();
    return google.drive({version: 'v3', auth});
}

export const gapi_upload_drive = async (drive: drive_v3.Drive, data: drive_v3.Params$Resource$Files$Create): Promise<drive_v3.Schema$File> => {
    return new Promise((resolve, reject) => {
        drive.files.create(data , function (err, file) {
            if (err) {
                reject(err)
            } else {
                resolve(file?.data!)
            }
        });
    })
}

export const gapi_download_drive = async (drive: drive_v3.Drive, data: drive_v3.Params$Resource$Files$Export): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        drive.files.export(
            data, 
            { responseType: "arraybuffer" }, 
            (err, response) => {
                if (err) {
                    reject(err)
                }
                resolve(Buffer.from(response?.data as any))
            })
    })
}

export const gapi_delete_drive = async (drive: drive_v3.Drive, data: drive_v3.Params$Resource$Files$Delete) => {
    return drive.files.delete(data)
}

export const gapi_authorize = async (credentials: Record<string, any>) => {
    const { client_secret, client_id, redirect_uris } = credentials.web;

    const token_path = get_gapi_token()
    let oAuth2Client: any  = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]
    );

    if (!fs.existsSync(token_path)) {
        oAuth2Client = await get_gapi_access_token(oAuth2Client, token_path)
    } else {
        const token = await fs.readFileSync(token_path)
        oAuth2Client.setCredentials(JSON.parse(token.toString()));
    }
    
    return oAuth2Client
}

const get_gapi_access_token = (oAuth2Client: any, token_path: string) => {
    return new Promise((resolve, reject) => {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: get_gapi_drive_scope(),
        });

        console.log('Authorize this app by visiting this url:', authUrl);
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question('Enter the code from that page here: ', (code) => {
            rl.close();
            oAuth2Client.getToken(code, (err, token) => {
                if (err) {
                    console.error('Error retrieving access token', err)
                    return reject(err)
                }

                oAuth2Client.setCredentials(token);
                // Store the token to disk for later program executions

                fs.writeFile(token_path, JSON.stringify(token), (err) => {
                    if (err) {
                        console.error(err)
                        return reject(err)
                    };
                    console.log('Token stored to', token_path);
                });
                
                resolve(oAuth2Client)
            });
        });
    })
}
