import QuestionCard
from './QuestionCard'

export default function QuestionSection({
  section
}: any) {

  return (

    <div className="mb-10">

      <div className="mb-5">

        <h2
          className="
          text-2xl
          font-bold
          "
        >
          {section.title}
        </h2>

        <p className="text-gray-500">
          {section.instruction}
        </p>

      </div>

      {
        section.questions.map(
          (
            question:any,
            index:number
          ) => (

            <QuestionCard
              key={index}
              question={question}
            />
          )
        )
      }

    </div>
  )
}