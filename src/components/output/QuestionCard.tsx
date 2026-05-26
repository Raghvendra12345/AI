export default function QuestionCard({
  question
}: any) {

  return (

    <div
      className="
      border
      rounded-2xl
      p-5
      mb-4
      bg-gray-50
      "
    >

      <h3
        className="
        font-semibold
        text-lg
        "
      >
        {question.question}
      </h3>

      <div
        className="
        flex
        gap-3
        mt-4
        items-center
        "
      >

        <span
          className="
          px-3
          py-1
          rounded-full
          text-sm
          bg-black
          text-white
          "
        >
          {question.difficulty}
        </span>

        <span
          className="
          text-sm
          font-medium
          "
        >
          {question.marks} Marks
        </span>

      </div>

    </div>
  )
}