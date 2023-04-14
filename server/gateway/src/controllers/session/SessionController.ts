import { TAppContext, useContext, useSessionCreateToken, useContextSession } from '@mzara/graphql'
import { Request, Response } from 'express'

export const token = async (req: Request, res: Response<string>) => {
    const context: TAppContext = await useContext()
    if (context.sessionUser) {
        const session = await useContextSession()
        return res.status(200).send(session.token)
    }
    const token = await useSessionCreateToken(context.userAgent!)
    return res.status(200).send(token)
}
