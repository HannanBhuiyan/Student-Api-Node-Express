require('dotenv').config()

const dev =  {
     app: {
          port: process.env.port || 8000
     },
     db: {
          url: process.env.DB_URL
     }
}

module.exports = dev