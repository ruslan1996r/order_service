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
const { uploadFile } = require('../utils/multer')
const UserModel = require('../models/user')
const ApartmentModel = require('../models/apartment')
const VoucherModel = require('../models/voucher')

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        registerUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                lastname: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                role: { type: UserRole }
            },
            resolve(parent, { name, lastname, email, role }) {
                const user = new UserModel({ name, lastname, email, role })
                return user.save()
            }
        },
        loginUser: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, { email }) {
                const user = UserModel.findOne({ email })
                if (user) return user
                return null
            }
        },

        addApartment: {
            type: ApartmentType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: GraphQLString },
                price: { type: new GraphQLNonNull(GraphQLInt) },
                numberOfRooms: { type: new GraphQLNonNull(GraphQLInt) },
                checkInDate: { type: new GraphQLNonNull(GraphQLString) },
                checkOutDate: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, { name, description, image, price, numberOfRooms, checkInDate, checkOutDate }) {
                const apartment = new ApartmentModel({
                    name, description, image, price, numberOfRooms, checkInDate, checkOutDate
                })
                return apartment.save()
            }
        },

        editApartment: {
            type: ApartmentType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLInt) },
                numberOfRooms: { type: new GraphQLNonNull(GraphQLInt) },
                checkInDate: { type: new GraphQLNonNull(GraphQLString) },
                checkOutDate: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, { id, name, description, image, price, numberOfRooms, checkInDate, checkOutDate }) {
                // uploadFile - здесь и в методе создания квартиры нужно будет сохранять и вернуть картинку (путь)
                return ApartmentModel.findByIdAndUpdate(id,
                    { $set: { name, description, image, price, numberOfRooms, checkInDate, checkOutDate } },
                    { new: true }
                )
            }
        },
        bookAnApartment: {
            type: ApartmentType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                userId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, { id, userId }) {
                return ApartmentModel.findByIdAndUpdate(id, { userId }, { new: true })
            }
        },
        addVoucher: {
            type: VoucherType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: GraphQLString },
                price: { type: new GraphQLNonNull(GraphQLInt) },
                quantity: { type: new GraphQLNonNull(GraphQLInt) },
                variant: { type: VoucherVariant }
            },
            resolve(parent, { name, description, image, price, quantity, variant }) {
                const voucher = new VoucherModel({ name, description, image, price, quantity, variant })
                return voucher.save()
            }
        },
        editVoucher: {
            type: VoucherType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLInt) },
                quantity: { type: new GraphQLNonNull(GraphQLInt) },
                variant: { type: new GraphQLNonNull(VoucherVariant) }
            },
            resolve(parent, { id, name, description, image, price, quantity, variant }) {
                return VoucherModel.findByIdAndUpdate(id,
                    { $set: { name, description, image, price, quantity, variant } },
                    { new: true }
                )
            }
        },
        bookAVoucher: {
            type: VoucherType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                userId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, { id, userId }) {
                return VoucherModel.findByIdAndUpdate(id, { userId }, { new: true })
            }
        }
    }
})

module.exports = { Mutation }