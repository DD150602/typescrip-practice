import { Router } from 'express'
import { MainController } from '../controllers/main'
import { CategoryControler } from '../controllers/category.controller'
import { Middleware } from '../middlewares/middleware'

export const router = Router()

const mainController = new MainController()
const categoryControler = new CategoryControler()
const middleware = new Middleware()

router.get('/', mainController.index)

router.get('/categories', middleware.log, categoryControler.getAllCategories)

router.get('/categories/:id', categoryControler.getCategoryById)
