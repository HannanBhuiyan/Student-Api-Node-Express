const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/', (req, res) => {
     res.sendFile(path.join(__dirname + "/../resources/views/index.html"))
})


// route not found error
router.use( (req, res, next) => {
     res.status(404).send("Route not found")
})


//internal server error
app.use((err, req, res, next) => {
     res.status(500).send("Internal server error")
})



module.exports = router
