import { defineMock } from 'vite-plugin-mock-dev-server'
import { localeFaker } from './shared/faker'

export default defineMock([
  {
    url: 'mock_api/test',
    body: Array.from({ length: 10 }, () => ({
      id: localeFaker.string.uuid(),
      title: localeFaker.string.alpha({ length: 10 }),
      state: localeFaker.helpers.arrayElement(['open', 'closed', 'all', 'processing']),
      created_at: localeFaker.date.anytime(),
    })),
  },
])
