import ky from 'ky'
import md5 from 'md5'

export default ky.create({
  prefixUrl: 'http://localhost:3000/api/v1',
  timeout: 5 * 60 * 1000, // two minutes
  retry: 3,
  hooks: {
    beforeRequest: [
      async (request) => {
        const timestamp = Date.now()
        const authorStr = `${'some key'}${timestamp}`

        request.headers.set('Content-Type', 'application/json;charset=utf-8')
        request.headers.set('Authorization', md5(authorStr))
        request.headers.set('timestamp', timestamp.toString())
      },
    ],
  },
})
