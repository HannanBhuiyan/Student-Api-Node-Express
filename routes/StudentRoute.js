const express = require("express")
const router = express.Router()
const {getAllStudent, createStudent, getOneStudent, updateStudent, deleteStudent} = require('../app/Controller/StudentController')


router.get('/', getAllStudent)
router.post('/create', createStudent)
router.get('/single_student/:id', getOneStudent)
router.put('/update/:id', updateStudent)
router.delete('/delete/:id', deleteStudent)

module.exports = router
