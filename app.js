const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const graphQLSchema = require('./graphql/schema/index')
const graphQLResolvers = require('./graphql/resolvers/index')
const isAuth = require("./middleware/isAuth")

const app = express();

app.use(bodyParser.json());

app.use(isAuth)

app.use('/api-graph', graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
}))

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.yj6l1gi.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
    .then(() => {
        app.listen(5000);
        console.log("Database Connected SuccessFully")
    })
    .catch((err) => {
        console.log("Error in Connecting Database :", err)
    })
