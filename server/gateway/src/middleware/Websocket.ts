import { TSession, useSessionUserCloseFork, useSessionUserGetActive, useSessionUserNewFork } from '@mzara/graphql';
import { Server } from 'http';
import {  AddressInfo, Server as WSServer } from 'ws'

export const initWebsocket = (server: Server) => {
    const wss = new WSServer({ server });
    wss.on('connection', handleConnection)
    wss.on('listening', () => {
        console.log(`🚀 WEBSOCKET Server ready at port ${(wss.address() as AddressInfo).port}`);
    })
}

const handleConnection = async (ws, req) => {
    const token = req.url.replace(/^\//, '')
    const session = await TSession.findOne({ where: { token } })
    const sessionUser = await useSessionUserGetActive(session?.id!)
    if (!sessionUser) return ws.close(1007, 'TOKEN_INVALID')
    await useSessionUserNewFork(sessionUser.id)

    ws.on('message', (data) => {
        // Todo : check message and dispatch it to user concerned
        console.log(data)
    })

    ws.on('close', (data) => {
        useSessionUserCloseFork(sessionUser.id)
    })
}
