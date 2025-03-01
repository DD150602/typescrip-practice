import { Router } from 'express'
import { MainController } from '../controllers/main'
import { CategoryControler } from '../controllers/category.controller'

export const router = Router()

const mainController = new MainController()
const categoryControler = new CategoryControler()

router.get('/', mainController.index)

router.get('/categories', categoryControler.getAllCategories)

router.get('/categories/:id', categoryControler.getCategoryById)
