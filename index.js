const express = require('express')
const cors = require('cors')
const config = require('./config/config')
const app = express()
const studentRouter = require('./routes/StudentRoute')
const homeRouter = require('./routes/HomeRoute')
const port = config.app.port
const swaggerUi= require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
require('./config/db')


app.use(cors({ origin: "*"}))

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



// all router
app.use("/api/student" , studentRouter)
app.use(homeRouter)
 



// start server
app.listen(port, () => {
     console.log(`server run at ${port}`)
})