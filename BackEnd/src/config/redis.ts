// import IORedis from 'ioredis'

// export const redisConnection =
//   new IORedis(
//     process.env.REDIS_URL!,
//     {
//       maxRetriesPerRequest: null,

//       enableReadyCheck: false,

//       retryStrategy(times) {
//         return Math.min(
//           times * 100,
//           3000
//         )
//       },

//       reconnectOnError() {
//         return true
//       }
//     }
//   )

// redisConnection.on('connect', () => {
//   console.log('Redis Connected')
// })

// redisConnection.on('error', (err) => {
//   console.log('Redis Error:', err.message)
// })

import IORedis from 'ioredis'

export const redisConnection =
  new IORedis({

    host:
      process.env.REDIS_HOST,

    port:
      Number(
        process.env.REDIS_PORT
      ),

    maxRetriesPerRequest:null
  })

redisConnection.on(
  'connect',
  () => {
    console.log(
      'Redis Connected'
    )
  }
)

redisConnection.on(
  'error',
  (err) => {
    console.log(
      'Redis Error:',
      err.message
    )
  }
)