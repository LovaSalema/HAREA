import 'reflect-metadata'
import { TSessionUser } from './TSessionUser';

export type TAppContext = {
    sessionUser: TSessionUser;
    userAgent?: TUserAgent;
    appName?: string
    lang?: string
}

export type TUserAgent = {
    isMobile?: boolean,
    isDesktop?: boolean,
    isBot?: boolean,
    browser?: string,
    version?: string,
    os?: string,
    platform?: string,
    source?: string
}

export enum ErrorEnum {
    FORBIDDEN = 'FORBIDDEN',
    NOT_FOUND = 'NOT_FOUND',
    NO_ENTITY_CREATED = 'NO_ENTITY_CREATED'
}
