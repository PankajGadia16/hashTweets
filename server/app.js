const express = require("express")
const routes = require('./routes/')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const app = express()
const router = express.Router()

let port = 6000 || process.env.PORT

routes(router)
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.use('/api', router)
app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})