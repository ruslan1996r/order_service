const GraphQLSchema = require('graphql').GraphQLSchema // конструктор для Query, который идёт на экскорт

const { Mutation } = require("./mutations")
const { Query } = require("./queries")

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})