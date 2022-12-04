const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
     student_name : {
          type: String,
          match: /[a-z]/,
          require : true
     },
     student_age: {
          type: Number,
          require: true
     },
     student_roll : {
          type : Number,
          require: true
     },
     student_email: {
          type : String,
          require: true
     },
     created_at: {
          type: Date,
          default: Date.now
     }
})

module.exports = mongoose.model("student_info", studentSchema)