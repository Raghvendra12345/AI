// import IORedis from 'ioredis'

// export const redisConnection=new IORedis(
//     process.env.REDIS_URL!,
//     {
//         maxRetriesPerRequest:null
//     }
// )


// import IORedis from 'ioredis'

// export const redisConnection =
//   new IORedis(
//     process.env.REDIS_URL!,
//     {
//       maxRetriesPerRequest: null,

//       retryStrategy(times) {
//         return Math.min(
//           times * 50,
//           2000
//         )
//       },

//       enableReadyCheck: false
//     }
//   )




import IORedis from 'ioredis'

export const redisConnection =
  new IORedis(
    process.env.REDIS_URL!,
    {
      maxRetriesPerRequest: null,

      enableReadyCheck: false,

      retryStrategy(times) {
        return Math.min(
          times * 100,
          3000
        )
      },

      reconnectOnError() {
        return true
      }
    }
  )

redisConnection.on('connect', () => {
  console.log('Redis Connected')
})

redisConnection.on('error', (err) => {
  console.log('Redis Error:', err.message)
})