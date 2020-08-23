const graphql = require('graphql')
const {
    GraphQLSchema,      // конструктор для Query, который идёт на экскорт
    // GraphQLBoolean,     // тип булеан
    // GraphQLObjectType,  // конструктор для схемы
    // GraphQLString,      // тип строки

    // GraphQLInt,         // целые числа
    // GraphQLList,        // для выведения списка внутри другой сущности
    // GraphQLID,          // он может быть числом, строкой, чем угодно
    // GraphQLNonNull,     // помечает поле как обязательное
} = graphql

const { Mutation } = require("./mutations")
const { Query } = require("./queries")

// const { UserRole, VoucherVariant } = require('./enums')

// const UserModel = require('../models/user')
// const ApartmentModel = require('../models/apartment')
// const VoucherModel = require('../models/voucher')

// const UserType = new GraphQLObjectType({
//     name: "User",
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: new GraphQLNonNull(GraphQLString) },
//         lastname: { type: new GraphQLNonNull(GraphQLString) },
//         email: { type: new GraphQLNonNull(GraphQLString) },
//         role: {
//             type: UserRole,
//             defaultValue: UserRole.getValue('buyer')
//         }
//     })
// })

// const ApartmentType = new GraphQLObjectType({
//     name: "Apartment",
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         image: { type: GraphQLString },
//         price: { type: GraphQLInt },
//         numberOfRooms: { type: GraphQLInt },
//         checkInDate: { type: GraphQLString },
//         checkOutDate: { type: GraphQLString },
//         user: {
//             type: UserType,
//             resolve({ userId }, args) {
//                 return UserModel.findById(userId)
//             }
//         }
//     })
// })

// const VoucherType = new GraphQLObjectType({
//     name: "Voucher",
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         image: { type: GraphQLString },
//         price: { type: GraphQLInt },
//         quantity: { type: GraphQLInt },
//         variant: {
//             type: VoucherVariant,
//             defaultValue: VoucherVariant.getValue('restaurant')
//         },
//         user: {
//             type: UserType,
//             resolve({ userId }, args) {
//                 return UserModel.findById(userId)
//             }
//         }
//     })
// })

// // -------------------------------------------------------------------------------------------------
// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {}
// })
// // -------------------------------------------------------------------------------------------------
// const Query = new GraphQLObjectType({
//     name: "Query",
//     fields: {
//         user: {
//             type: UserType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, { id }) {
//                 return UserModel.findById(id)
//             }
//         },
//         apartment: {
//             type: ApartmentType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, { id }) {
//                 return ApartmentModel.findById(id)
//             }
//         },
//         voucher: {
//             type: VoucherType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, { id }) {
//                 return VoucherModel.findById(id)
//             }
//         },
//         apartments: {
//             type: ApartmentType,
//             args: {},
//             resolve() {
//                 return 
//             }
//         }
//     }
// })

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})