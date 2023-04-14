import { TAppContext, useContext, useSessionCreateToken, useContextSession } from '@mzara/graphql'
import { Request, Response } from 'express'

export const expoTokenRegister = async (req: Request, res: Response<string>) => {
    const { body } = req

    console.log(body)
    

    return res.status(204).send()
}
