import 'dotenv/config'

export const {
  PORT = 4000,
  DB_HOST = '',
  DB_PORT = 3306,
  DB_PASSWORD = '',
  DB_USER = '',
  DB_DATABASE = 'parts'
} = process.env
