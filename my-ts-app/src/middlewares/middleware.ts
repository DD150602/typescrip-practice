import { NextFunction, Request, RequestHandler, Response } from 'express'
import cors from 'cors'

export class Middleware {
  log (req: Request, res: Response, next: NextFunction): void {
    const { method, url, body, headers, originalUrl } = req
    console.log('log middleware', method, url, body, headers, originalUrl)
    next()
  }

  cors ({ acceptedOrigin }: { acceptedOrigin: string[] }): RequestHandler {
    return cors({
      origin: (origin, callback) => {
        if (origin === undefined || acceptedOrigin.includes(origin)) {
          return callback(null, true)
        }
        return callback(new Error('Not allowed by CORS'))
      }
    })
  }

  error (error: Error, req: Request, res: Response, next: NextFunction): void {
    console.error(error)
    // TODO: make an standard error response
    const statusCode = 500
    res.status(statusCode).json({ errorMessage: error.message })
  }
}
