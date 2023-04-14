import 'reflect-metadata';
import express from 'express';
import http from 'http'
import bodyParser from 'body-parser'
import { ENV } from './config/env';
import Controller from './controllers/Controllers'
import { compress, cors } from './middleware';
import { initWebsocket } from './middleware/Websocket';
import { logRequest, useAppolo, useCreateDataSource, userContext } from '@mzara/context';

const init_api = async () => {
    /**
     * Express
     */
    const app = express();
    const port = ENV.SERVER_PORT
    // Middleware
    app.use(express.json({ limit: `${ENV.PAYLOAD_SIZE_LIMIT || 1}mb` }));
    app.use(bodyParser.json())
    app.use(cors)
    app.use(compress())
    app.use(userContext)
    // app.use(autorizedRequest)
    app.use(logRequest)
    // Routes
    app.use(Controller)
    // Ops
    app.set('port', port)
    const server = http.createServer(app)

    /**
     * Appolo
     */
    const apollo_server = await useAppolo()
    apollo_server.applyMiddleware({ app })

    /**
     * Websocket
     */
    initWebsocket(server)

    server.on('error', (error: any) => {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const address = server.address();
        const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges.');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use.');
                process.exit(1);
                break;
            default:
                throw error;
        }
    });
    server.on('listening', () => {
        const address = server.address();
        const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
        console.log(`🚀 API Server ready at ${bind}`);
        console.log(`🚀 GRAPHQL Server ready at ${bind}/graphql`);
    });

    server.listen(port);
}

const init = async () => {
    await useCreateDataSource({
        host: ENV.DB_HOST,
        port: +ENV.DB_PORT,
        username: ENV.DB_USER,
        password: ENV.DB_PASSWORD || '',
        database: ENV.DB_NAME,
    })
    await init_api()
}

init()

export const file_repo = `${__dirname}/../../${ENV.NODE_ENV}-${ENV.FILE_REPO}`
