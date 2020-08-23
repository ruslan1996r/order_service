const graphql = require('graphql')
const {
    GraphQLEnumType,    // enum-тип
} = graphql


const UserRole = new GraphQLEnumType({
    name: "UserRole",
    values: {
        seller: {
            value: "seller"
        },
        buyer: {
            value: "buyer"
        },
        admin: {
            value: "admin"
        }
    }
})

const VoucherVariant = new GraphQLEnumType({
    name: "VoucherVariant",
    values: {
        restaurant: {
            value: "restaurant"
        },
        club: {
            value: "club"
        },
        museum: {
            value: "museum"
        },
        cinema: {
            value: "cinema"
        },
    }
})

module.exports = { UserRole, VoucherVariant }