import express, { Application, json } from 'express'
import { PORT } from '../config/config'
import { router } from '../routes/main'
import { Middleware } from '../middlewares/middleware'

const middleware = new Middleware()

export class Server {
  private readonly app: Application
  private readonly port: string | number
  private readonly apiPaths = {
    main: '/api'
  }

  private readonly allowedOrigins = ['http://localhost:3000']

  constructor () {
    this.app = express()
    this.port = PORT

    this.middlewares()
    this.routes()
    this.error()
  }

  middlewares (): void {
    this.app.use(json())
    this.app.use(middleware.cors({ acceptedOrigin: this.allowedOrigins }))
  }

  routes (): void {
    this.app.use(this.apiPaths.main, router)
  }

  error (): void {
    this.app.use(middleware.error)
  }

  start (): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`)
    })
  }
}
