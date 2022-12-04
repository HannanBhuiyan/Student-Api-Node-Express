const mongoose = require('mongoose')
const config = require('./config')

const dbURL = config.db.url

mongoose.connect(dbURL)
.then(()=>{
     console.log("Database connection success")
})
.catch((error)=> {
     console.log(error)
     process.exit(1)
})


