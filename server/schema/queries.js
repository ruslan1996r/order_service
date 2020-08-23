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

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return UserModel.findById(id)
            }
        },
        apartment: {
            type: ApartmentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return ApartmentModel.findById(id)
            }
        },
        voucher: {
            type: VoucherType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return VoucherModel.findById(id)
            }
        },
        apartments: {
            type: ApartmentType,
            args: {},
            resolve() {
                return
            }
        }
    }
})

module.exports = { Query }