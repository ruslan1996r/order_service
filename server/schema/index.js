const GraphQLSchema = require('graphql').GraphQLSchema // конструктор для Query, который идёт на экскорт

const { Mutation } = require("./mutations")
const { Query } = require("./queries")

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})

// const graphql = require('graphql')
// const {
//     GraphQLSchema,      // конструктор для Query, который идёт на экскорт
//     // GraphQLBoolean,     // тип булеан
//     // GraphQLObjectType,  // конструктор для схемы
//     // GraphQLString,      // тип строки

//     // GraphQLInt,         // целые числа
//     // GraphQLList,        // для выведения списка внутри другой сущности
//     // GraphQLID,          // он может быть числом, строкой, чем угодно
//     // GraphQLNonNull,     // помечает поле как обязательное
// } = graphql