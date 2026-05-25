export const generateQuestionsPrompt=(
    assignment:any
)=>{
    return `
    Generate a structured assessment paper 

    Requirements: 

    Title: ${assignment.title}
      
    Total Questions:
    ${assignment.numberOfQuestions}

    Total Marks:
    ${assignment.totalMarks}

    Instructions:
    ${assignment.instructions}

    Return ONLY valid JSON.

    

    Format:

    {
        "title":"",
        "sections": [
            {
                "title":"",
                "instruction":"",
                "questions":[
                    {
                        "question":"",
                        "difficulty":"easy",
                        "marks":2
                    }
                ]
            }
        ]
    }

    `
}