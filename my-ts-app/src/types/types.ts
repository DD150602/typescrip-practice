import { Generated, Insertable, Selectable, Updateable } from 'kysely'

export interface CategoriesTable {
  id_category: Generated<number>
  description_caterogy: string
}

export type Categories = Selectable<CategoriesTable>
export type NewCategory = Insertable<CategoriesTable>
export type UpdateCategory = Updateable<CategoriesTable>

export interface CollectionsTable {
  id_collection: Generated<number>
  description_collection: string
}

export type Collection = Selectable<CollectionsTable>
export type NewCollection = Insertable<CollectionsTable>
export type UpdateCollection = Updateable<CollectionsTable>

export interface PartsTable {
  id_part: Generated<number>
  description_part: string
  id_collection: number
  id_category: number
}

export type Part = Selectable<PartsTable>
export type NewPart = Insertable<PartsTable>
export type UpdatePart = Updateable<PartsTable>

export interface Database {
  categories: CategoriesTable
  collections: CollectionsTable
  parts: PartsTable
}
