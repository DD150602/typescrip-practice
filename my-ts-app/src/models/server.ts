import express, { Application, json } from 'express'
import cors from 'cors'
import { PORT } from '../config/config'
import { router } from '../routes/main'

export class Server {
  private readonly app: Application
  private readonly port: string | number
  private readonly apiPaths = {
    main: '/api'
  }

  constructor () {
    this.app = express()
    this.port = PORT

    this.middlewares()
    this.routes()
  }

  middlewares (): void {
    this.app.use(json())
    this.app.use(cors())
  }

  routes (): void {
    this.app.use(this.apiPaths.main, router)
  }

  start (): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`)
    })
  }
}
