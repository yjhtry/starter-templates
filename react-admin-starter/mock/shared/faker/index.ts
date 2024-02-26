import { Faker, zh_CN } from '@faker-js/faker'

export const localeFaker = new Faker({
  locale: [
    zh_CN,
  ],
})

localeFaker.seed(123)
