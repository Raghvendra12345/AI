import {Request,Response} from 'express'
import Assignment from '../models/Assignment'
import { assessmentQueue } from '../queues/assignment.queue'

import {
  assignmentSchema
}
from '../validations/assignment.validation'


// export const createAssignment=async(
//     req:Request,
//     res:Response
// ) =>{
//     try{
//         const assignment=await Assignment.create(req.body)

//         // await assessmentQueue.add('generate-paper',{
//         //     assignmentId:assignment._id,
//         //     test:'hello'
//         // })

//         await assessmentQueue.add(

//   'generate-paper',

//   {
//     assignmentId: assignment._id
//   },

//   {
//     attempts: 3,

//     backoff: {
//       type: 'exponential',
//       delay: 2000
//     },

//     removeOnComplete: 100,

//     removeOnFail: 50
//   }
// )

//         res.status(201).json({success:true,assignment})
//     }
//     catch(error){
//         console.log(error)
//         res.status(500).json({success:false,message:'Failed to create assignment'})
//     }
// }

export const createAssignment = async (

  req: Request,

  res: Response

) => {

  try {
    console.log('Request Body:',req.body)

    const validatedData =
      assignmentSchema.parse(
        req.body
      )


    const assignment: any =
      await Assignment.create(
        validatedData
      )
      console.log('Assignment Created')

    await assessmentQueue.add(

      'generate-paper',

      {
        assignmentId:
          assignment._id
      },
       

      {
        attempts: 3,

        backoff: {
          type: 'exponential',
          delay: 2000
        }
      }
    )
    console.log('Job Added To Queue' )

    res.status(201).json({
      success: true,
      assignment
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message:
        'Failed to create assignment'
    })
  }
}

export const getAssignmentById = async (

  req: Request,

  res: Response

) => {

  try {

    const assignment =
      await Assignment.findById(
        req.params.id
      )

    if (!assignment) {

      return res.status(404).json({
        success: false,
        message: 'Assignment not found'
      })
    }

    res.status(200).json({
      success: true,
      assignment
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: 'Server Error'
    })
  }
}