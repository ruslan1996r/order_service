const graphql = require('graphql')
const {
    GraphQLBoolean,     // тип булеан
    GraphQLObjectType,  // конструктор для схемы
    GraphQLString,      // тип строки
    GraphQLSchema,      // конструктор для Query, который идёт на экскорт
    GraphQLInt,         // целые числа
    GraphQLList,        // для выведения списка внутри другой сущности // { type: new GraphQLList(GraphQLString) } - массив строк
    GraphQLID,          // он может быть числом, строкой, чем угодно
    GraphQLNonNull,     // помечает поле как обязательное
} = graphql

const { UserType, ApartmentType, VoucherType } = require("./types")
const { VoucherVariant } = require('./enums')
const UserModel = require('../models/user')
const ApartmentModel = require('../models/apartment')
const VoucherModel = require('../models/voucher')

function getFindParams(arguments) {
    const filters = {}
    for (arg in arguments) {
        if (arguments[arg]) {
            if (arg === "checkInDate") {
                filters[arg] = { $lte: arguments[arg] }
            } else if (arg === "checkOutDate") {
                filters[arg] = { $gte: arguments[arg] }
            } else {
                filters[arg] = arguments[arg]
            }
        }
    }
    return filters
}

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
            type: new GraphQLList(ApartmentType),
            args: {
                checkInDate: { type: GraphQLString }, // день заселения
                checkOutDate: { type: GraphQLString }, // день выселения
                price: { type: GraphQLInt },
                numberOfRooms: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const findParams = getFindParams(args)
                return ApartmentModel.find(findParams)
            }
        },
        vouchers: {
            type: new GraphQLList(VoucherType),
            args: {
                variant: { type: VoucherVariant },
                quantity: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const findParams = getFindParams(args)
                return VoucherModel.find(findParams)
            }
        }
    }
})

module.exports = { Query }