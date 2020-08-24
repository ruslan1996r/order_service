const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const cors = require("cors")
const schema = require("./schema/index")
const { checkPermissions } = require("./middlewares/checkPermissions")

const app = express()
const PORT = 8000
require("./mongodb")

app.use(cors())
app.use(checkPermissions)
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // позволяет работать с запросами graphql через интерфейс в браузере
}))

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
