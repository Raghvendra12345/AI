import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { connectDB } from './config/db'

import assignmentRoutes from './routes/assignment.routes'
import {createServer} from 'http'
import {Server} from 'socket.io'

import {errorMiddleware} from './middleware/error.middleware'
import { initSocket } from './sockets'

import './workers/assessment.worker'



const app=express()
const server=createServer(app)

initSocket(server)

app.use(cors())
app.use(express.json())
app.use('/api/assignments',assignmentRoutes)

app.use(errorMiddleware)



connectDB()

app.get('/',(req,res)=>{
    res.send('Server is running')
})

const PORT=process.env.PORT || 5001 

server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
}) 