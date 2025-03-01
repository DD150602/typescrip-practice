import { Database } from '../types/types'
import { createPool } from 'mysql2'
import { Kysely, MysqlDialect } from 'kysely'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config'

const dialect = new MysqlDialect({
  pool: createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: +DB_PORT
  })
})

export const db = new Kysely<Database>({
  dialect
})
