import { TAppContext, TDescriptor } from '@mzara/graphql'
import { Request, Response, NextFunction } from 'express'
import _ from 'lodash'

export const autorizedRequest = async (req: Request, res: Response, next?: NextFunction) => {

    const context: TAppContext = req.app.get('context')
    const session_user = context.sessionUser
    const token = req.headers['x-app-token'] || null
    const app_name = req.headers['x-app-name'] || ''

    if (req.method === 'OPTIONS') {
        return res.status(200).send()
    }
    
    if (req.url.includes('sandbox') && token === SANDBOX_UUID) {
        next?.()
        return;
    }

    if (req.url.includes('file/download')) {
        next?.()
        return;
    }

    // if (!(await check_app_name(app_name as string))) {
    //     return res.status(403).json({ message: 'UNKNOWN_APP' })
    // }

    // if (/^\/token$/.test(req.url)) {
    //     next?.()
    //     return;
    // }

    
    // if (!session_user?.is_authenticated && !(await check_trusted_graphql(req.body?.query, app_name as string))) {
    //     return res.status(403).json({ message: 'FORBIDDEN' })
    // }
    
    // if (!session_user && token) {
    //     return res.status(400).json({ message: 'TOKEN_INVALID' })
    // }

    // if (!session_user) {
    //     return res.status(400).json({ message: 'SERVICE_UNAVALAIBLE' })
    // }
    
    next?.()
}

const check_app_name = async (app_name: string) => {
    const count =  await TDescriptor.createQueryBuilder('de')
                            .where('tp=:tp', { tp: 'APP_NAME' })
                            .andWhere('ke=:app_name', { app_name })
                            .getCount()
    return count > 0
}

const check_trusted_graphql = async (query: string, app_name: string) => {

    return true
    // const txts = await Txt.createQueryBuilder('txt')
    //                     .where('tp=:tp', { tp: 'TRUSTED_REQUEST' })
    //                     .andWhere(`
    //                         (
    //                             SELECT COUNT(d.id) FROM de AS d 
    //                             INNER JOIN txt_des_de ON txt_des_de.deId=d.id
    //                             WHERE txt_des_de.txtId=txt.id AND (d.ke = "*" OR d.ke=:app_name)
    //                         ) > 0
    //                     `, { app_name })
    //                     .getMany()
    // return txts.some((item) => item.val.replace(/[\s|\n|\r]/g, '') === query.replace(/[\s|\n|\r]/g, ''))
}

export const SANDBOX_UUID = '6da0658f-767c-4cf0-af1c-baccaaef52cb'
