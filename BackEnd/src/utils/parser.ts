export const parseAIResponse = (
    response : string
) =>{
    try{
        return JSON.parse(response)

    } catch(error){
        throw new Error(
            'Invalid AI JSON response'
        )
    }
}