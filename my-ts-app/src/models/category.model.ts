import { db } from '../config/database'
import { Categories } from '../types/types'

export class CategoryModel {
  async getAllCategories (): Promise<Categories[]> {
    const rows = await db.selectFrom('categories').selectAll('categories').execute()
    return rows
  }

  async getCategoryById (id: number): Promise<Categories | undefined> {
    const rows = await db.selectFrom('categories').selectAll('categories').where('id_category', '=', id).executeTakeFirst()
    return rows
  }
}
