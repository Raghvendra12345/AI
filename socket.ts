// import {io} from 'socket.io-client'
// export const socket=io('http://localhost:5000')

// socket.on('generation-complete',(data)=>{
//     console.log(data)
// })


import { io }
from 'socket.io-client'

export const socket = io(

  'http://localhost:5000',

  {
    autoConnect:false
  }
)