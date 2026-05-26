export interface Question {

  question:string

  difficulty:string

  marks:number
}

export interface Section {

  title:string

  instruction:string

  questions:Question[]
}

export interface Assignment {

  _id:string

  title:string

  sections:Section[]
}