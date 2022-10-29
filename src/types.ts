import { Registry } from 'miragejs'
import Schema from 'miragejs/orm/schema'

import { models } from './miragejs/models'
import { factories } from './miragejs/factories'

type AppRegistry = Registry<typeof models, typeof factories>

export type AppSchema = Schema<AppRegistry>

export type User = {
  id: string
  name: string
  mobile: string
}

export type Product = {
  id: string
  title: string
  price: string
  image: string
}
