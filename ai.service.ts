// import OpenAI from 'openai'

// import { generateQuestionsPrompt } from '../prompts/generateQuestions.prompt'

// const client=new OpenAI({
//     apiKey:process.env.OPENAI_API_KEY
// })

// export const generateQuestions=async (assignment:any) => {
//       const prompt=`
//     Generate a question paper.

//     Return valid JSON.

//     Questions:${assignment.numberOfQuestions}
//     Marks: ${assignment.totalMarks}
//     Instructions:${assignment.instructions}`

//     const response=await client.chat.completions.create({
//     model:'gpt-4o-mini',
//     messages:[
//        {
//          role:'user',
//          content:prompt
        
//       }
//     ]
//     })
//     return response.choices[0].message.content || ''
// }

import OpenAI from 'openai'

import {
  generateQuestionsPrompt
}
from '../prompts/generateQuestions.prompt'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const generateQuestions = async (
  assignment: any
) => {

  const prompt =
    generateQuestionsPrompt(
      assignment
    )

  const response =
    await client.chat.completions.create({

      model: 'gpt-4o-mini',

      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })

  return (
    response.choices[0]?.message?.content ?? ''
  )
}