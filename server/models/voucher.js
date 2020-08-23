const { Schema, model } = require("mongoose");

const voucherSchema = new Schema({
    userId: String,
    name: String,
    description: String,
    image: String,
    price: Number,
    quantity: Number,   // Количество заказов. Например, количество билетов в кино, их может быть несколько
    variant: {
        type: String,
        enum: ['restaurant', 'club', 'museum', 'cinema'],
        default: 'restaurant'
    },
})

module.exports = model('vouchers', voucherSchema)