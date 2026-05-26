'use client'

import { useState } from 'react'

import { useForm } from 'react-hook-form'

import axios from 'axios'

import { useRouter }
from 'next/navigation'

export default function AssignmentForm() {

  const router = useRouter()

  const [loading, setLoading] =
    useState(false)

  const {

    register,

    handleSubmit,

    reset

  } = useForm()

  const onSubmit = async (
    data: any
  ) => {

    try {

      setLoading(true)

      const payload = {

        ...data,

        numberOfQuestions:
          Number(
            data.numberOfQuestions
          ),

        totalMarks:
          Number(
            data.totalMarks
          )
      }

      const response =
        await axios.post(

          'http://localhost:5001/api/assignments',

          payload
        )

      console.log(response.data)

      reset()

      router.push(
        `/output/${response.data.assignment._id}`
      )

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  return (

    <div
      className="
      bg-white
      rounded-3xl
      p-8
      shadow-sm
      border
      border-gray-200
      "
    >

      <div className="mb-8">

        <h1
          className="
          text-3xl
          font-bold
          text-gray-900
          "
        >
          Create Assignment
        </h1>

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Generate AI-powered
          assessments instantly
        </p>

      </div>

      <form

        onSubmit={
          handleSubmit(onSubmit)
        }

        className="space-y-6"
      >

        <div>

          <label
            className="
            block
            mb-2
            font-medium
            "
          >
            Assignment Title
          </label>

          <input

            {...register('title')}

            placeholder="Enter assignment title"

            className="
            w-full
            border
            border-gray-300
            rounded-xl
            p-4
            outline-none
            focus:ring-2
            focus:ring-indigo-500
            "
          />

        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "
        >

          <div>

            <label
              className="
              block
              mb-2
              font-medium
              "
            >
              Due Date
            </label>

            <input

              type="date"

              {...register('dueDate')}

              className="
              w-full
              border
              border-gray-300
              rounded-xl
              p-4
              "
            />

          </div>

          <div>

            <label
              className="
              block
              mb-2
              font-medium
              "
            >
              Total Questions
            </label>

            <input

              type="number"

              {...register(
                'numberOfQuestions'
              )}

              placeholder="10"

              className="
              w-full
              border
              border-gray-300
              rounded-xl
              p-4
              "
            />

          </div>

        </div>

        <div>

          <label
            className="
            block
            mb-2
            font-medium
            "
          >
            Total Marks
          </label>

          <input

            type="number"

            {...register('totalMarks')}

            placeholder="100"

            className="
            w-full
            border
            border-gray-300
            rounded-xl
            p-4
            "
          />

        </div>

        <div>

          <label
            className="
            block
            mb-2
            font-medium
            "
          >
            Instructions
          </label>

          <textarea

            {...register('instructions')}

            placeholder="Enter additional instructions"

            rows={5}

            className="
            w-full
            border
            border-gray-300
            rounded-xl
            p-4
            "
          />

        </div>

        <div>

          <label
            className="
            block
            mb-2
            font-medium
            "
          >
            Upload File
          </label>

          <input

            type="file"

            className="
            w-full
            border
            border-dashed
            border-gray-400
            rounded-xl
            p-6
            bg-gray-50
            "
          />

        </div>

        <button

          disabled={loading}

          className="
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          px-8
          py-4
          rounded-xl
          transition
          font-semibold
          w-full
          disabled:opacity-50
          "

        >

          {
            loading
              ? 'Generating...'
              : 'Generate Assignment'
          }

        </button>

      </form>

    </div>
  )
}