import {Queue} from 'bullmq'
import {redisConnection} from '../config/redis'



export const assessmentQueue=new Queue('assessment-generation',{
    connection:redisConnection,
})