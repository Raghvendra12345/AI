import { z } from 'zod'

export const assignmentSchema = z.object({

  title: z
    .string()
    .min(3),

  numberOfQuestions: z
    .number()
    .positive(),

  totalMarks: z
    .number()
    .positive(),

  instructions: z
    .string()
    .default(''),

  dueDate: z
    .string()
    .default('')
})