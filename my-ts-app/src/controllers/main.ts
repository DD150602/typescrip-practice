import { Request, Response } from 'express'

export class MainController {
  public index (req: Request, res: Response): void {
    res.json({ message: 'My Express Typescript App' })
  }
}
