'use client'

import { useEffect }
from 'react'

import { useParams }
from 'next/navigation'

import DashboardLayout
from '@/components/layout/DashboardLayout'

import StudentInfo
from '@/components/output/StudentInfo'

import QuestionSection
from '@/components/output/QuestionSection'

import PDFDownload
from '@/components/output/PDFDownload'

import { getAssignment }
from '@/services/assignment.service'

import {
  useAssignmentStore
}
from '@/store/assignmentStore'

import { useSocket }
from '@/hooks/useSocket'

export default function OutputPage() {

  useSocket()

  const params = useParams()

  const {
    assignment,
    setAssignment
  } = useAssignmentStore()

  useEffect(() => {

    const fetchAssignment =
      async () => {

      try {

        const data =
          await getAssignment(
            params.id as string
          )

        setAssignment(
          data.assignment
        )

      } catch (error) {

        console.log(error)
      }
    }

    fetchAssignment()

  }, [params.id, setAssignment])

  if (!assignment) {

    return (

      <DashboardLayout>

        <div
          className="
          flex
          items-center
          justify-center
          h-screen
          "
        >

          <h1
            className="
            text-2xl
            font-semibold
            "
          >
            Loading...
          </h1>

        </div>

      </DashboardLayout>
    )
  }

  return (

    <DashboardLayout>

      <div
        className="
        flex
        justify-end
        mb-6
        "
      >

        <PDFDownload />

      </div>

      <div

        id="paper"

        className="
        bg-white
        rounded-3xl
        p-10
        shadow-sm
        "
      >

        <div
          className="
          text-center
          mb-10
          "
        >

          <h1
            className="
            text-4xl
            font-bold
            "
          >
            {
              assignment.generatedPaper
              ?.title
            }
          </h1>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            AI Generated Question Paper
          </p>

        </div>

        <StudentInfo />

        {
          assignment.generatedPaper
          ?.sections
          ?.map(
            (
              section:any,
              index:number
            ) => (

              <QuestionSection

                key={index}

                section={section}

              />
            )
          )
        }

      </div>

    </DashboardLayout>
  )
}