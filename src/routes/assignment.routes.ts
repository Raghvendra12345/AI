import express from 'express'

import {createAssignment,getAssignmentById} from '../controllers/assignment.controller'

const router=express.Router()

router.post('/',createAssignment)

router.get('/:id', getAssignmentById)

export default router