const student_info = require('../Model/StudentModel') 

// get all student
exports.getAllStudent = async (req, res) => {
     try {
          const students = await student_info.find()
          res.status(200).json(students)
     } catch (error) {
         res.status(500).send(error.message) 
     }
}

// create student
exports.createStudent =  async (req, res) => {
     try {
          const newStudent = new student_info({
               student_name: req.body.student_name,
               student_age: Number(req.body.student_age),
               student_roll: Number(req.body.student_roll),
               student_email: req.body.student_email
          })
          await newStudent.save() 
          res.status(201).send("student create success")
     } catch (error) {
          res.status(500).send(error.message)
     }
}

// show one student
exports.getOneStudent = async (req, res) => {
     try {
          const student = await student_info.findById(req.params.id)
          res.status(200).json(student)
     } catch (error) {
          res.status(500).send(error.message)
     }
}

// update student
exports.updateStudent = async (req, res) => {
     try {
          const student = await student_info.findById(req.params.id)
          student.student_name = req.body.student_name
          student.student_age = Number(req.body.student_age)
          student.student_email = req.body.student_email
          student.student_roll = Number(req.body.student_roll)
          student.save()
          res.status(200).send("student update success")
     } catch (error) {
          res.status(500).send(error.message)
     }
}

// delete student
exports.deleteStudent = async (req, res) => {
     try {
          await student_info.findByIdAndDelete(req.params.id)
          res.status(200).send("student delete success")
     } catch (error) {
          res.status(500).send(error.message)
     }
}
