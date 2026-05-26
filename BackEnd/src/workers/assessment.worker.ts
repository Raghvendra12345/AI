import { Worker } from 'bullmq'

import Assignment
from '../models/Assignment'

import {
  generateQuestions
}
from '../services/ai.service'

import {
  redisConnection
}
from '../config/redis'

import {
  getIO
}
from '../sockets'

import {
  parseAIResponse
}
from '../utils/parser'

new Worker(

  'assessment-generation',

  async (job) => {

    try {

      console.log('Job Started')

      console.log(job.data)

      const io = getIO()

      io.emit(
        'generation-progress',
        {
          progress: 20
        }
      )

      const assignment =
        await Assignment.findById(
          job.data.assignmentId
        )

      if (!assignment) {

        console.log(
          'Assignment not found'
        )

        return
      }
      console.log("Generating AI Questions")

      assignment.status =
        'processing'

      await assignment.save()

      io.emit(
        'generation-progress',
        {
          progress: 50
        }
      )

      const generatedPaper =
        await generateQuestions(
          assignment
        )

      console.log(
        'Raw AI Response:'
      )

      console.log(generatedPaper)

      assignment.generatedPaper =
        parseAIResponse(
          generatedPaper
        )

      assignment.status =
        'completed'

      await assignment.save()

      console.log(
        'AI Generation Complete'
      )

      io.emit(
        'generation-complete',
        {
          assignmentId:
            assignment._id
        }
      )

    } catch (error) {

      console.log(
        'Worker Error:',
        error
      )
    }
  },

  {
    connection:
      redisConnection
  }
)