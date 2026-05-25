// import {create} from 'zustand'

// interface AssignmentState{
//     loading:boolean
//     assignment:any
//     setAssignment:(data:any)=>void
// }

// export const useAssignmentStore=create<AssignmentState>((set)=>({
//       loading:false,
//       assignment:null,

//       setAssignment:(data)=>
//         set({
//             assignment:data
//         })
// }))


import { create }
from 'zustand'

interface AssignmentState {

  loading:boolean

  assignment:any

  setLoading:
  (loading:boolean)=>void

  setAssignment:
  (data:any)=>void
}

export const useAssignmentStore =
create<AssignmentState>((set)=>({

  loading:false,

  assignment:null,

  setLoading:(loading)=>
    set({ loading }),

  setAssignment:(data)=>
    set({
      assignment:data
    })
}))