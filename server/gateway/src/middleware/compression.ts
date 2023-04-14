import { Request, Response } from 'express'
import compression from 'compression'

const compression_filter = (req: Request, res: Response) => {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }
    // fallback to standard filter function
    return compression.filter(req, res)
}

export const compress = () => compression({ filter: compression_filter, level: 9 })