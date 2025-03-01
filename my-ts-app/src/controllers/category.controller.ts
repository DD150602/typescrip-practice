import { Request, Response } from 'express'
import { CategoryModel } from '../models/category.model'

const model = new CategoryModel()
export class CategoryControler {
  async getAllCategories (req: Request, res: Response): Promise<void> {
    const response = await model.getAllCategories()
    res.json({ response })
  }

  async getCategoryById (req: Request, res: Response): Promise<void> {
    const response = await model.getCategoryById(+req.params.id)
    if (response === undefined) {
      res.status(404).json({ message: 'Category not found' })
      return
    }
    res.json({ response })
  }
}
