import axios from 'axios'

const API =
  'http://localhost:5000/api/assignments'

export const createAssignment =
  async (data:any) => {

    const response =
      await axios.post(API, data)

    return response.data
}

export const getAssignment =
  async (id:string) => {

    const response =
      await axios.get(`${API}/${id}`)

    return response.data
}