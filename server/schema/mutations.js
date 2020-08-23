const graphql = require('graphql')
const {
    GraphQLBoolean,     // тип булеан
    GraphQLObjectType,  // конструктор для схемы
    GraphQLString,      // тип строки
    GraphQLSchema,      // конструктор для Query, который идёт на экскорт
    GraphQLInt,         // целые числа
    GraphQLList,        // для выведения списка внутри другой сущности
    GraphQLID,          // он может быть числом, строкой, чем угодно
    GraphQLNonNull,     // помечает поле как обязательное
} = graphql

const { UserRole, VoucherVariant } = require('./enums')
const { UserType, ApartmentType, VoucherType } = require("./types")
const UserModel = require('../models/user')
const ApartmentModel = require('../models/apartment')
const VoucherModel = require('../models/voucher')

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {}
})

module.exports = { Mutation }