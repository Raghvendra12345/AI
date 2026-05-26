import mongoose from 'mongoose'

const AssignmentSchema=new mongoose.Schema(
    {
       title: {
      type: String,
      required: true
    },

    dueDate: {
      type: Date
    },

    questionTypes: [
      String
    ],

    numberOfQuestions: {
      type: Number,
      required: true
    },

    totalMarks: {
      type: Number,
      required: true
    },

    instructions: {
      type: String
    },

    status: {
      type: String,

      enum: [
        'pending',
        'processing',
        'completed',
        'failed'
      ],

      default: 'pending'
    },

    generatedPaper: {
      type: Object,
      default: null
    }

    },
    {
        timestamps:true
    }
)
export default mongoose.model('Assignment',AssignmentSchema)