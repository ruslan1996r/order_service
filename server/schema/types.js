const graphql = require('graphql')
const {
    GraphQLObjectType,  // конструктор для схемы
    GraphQLString,      // тип строки
    GraphQLInt,         // целые числа
    GraphQLID,          // он может быть числом, строкой, чем угодно
    GraphQLNonNull,     // помечает поле как обязательное
} = graphql

const { UserRole, VoucherVariant } = require('./enums')
const UserModel = require("../models/user")

const DEFAULT_IMG = "https://www.événementiel.net/wp-content/uploads/2014/02/default-placeholder.png"

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        lastname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        role: {
            type: UserRole,
            defaultValue: UserRole.getValue('buyer')
        }
    })
})

const ApartmentType = new GraphQLObjectType({
    name: "Apartment",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        image: {
            type: GraphQLString,
            defaultValue: DEFAULT_IMG
        },
        price: { type: GraphQLInt },
        numberOfRooms: { type: GraphQLInt },
        checkInDate: { type: GraphQLString },
        checkOutDate: { type: GraphQLString },
        user: {
            type: UserType,
            defaultValue: null,
            resolve({ userId }, args) {
                return UserModel.findById(userId)
            }
        }
    })
})

const VoucherType = new GraphQLObjectType({
    name: "Voucher",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        image: {
            type: GraphQLString,
            defaultValue: DEFAULT_IMG
        },
        price: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
        variant: {
            type: VoucherVariant,
            defaultValue: VoucherVariant.getValue('restaurant')
        },
        user: {
            type: UserType,
            defaultValue: null,
            resolve({ userId }, args) {
                return UserModel.findById(userId)
            }
        }
    })
})

module.exports = { UserType, ApartmentType, VoucherType }