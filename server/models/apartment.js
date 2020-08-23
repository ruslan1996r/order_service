const { Schema, model } = require("mongoose");

const apartmentSchema = new Schema({
    userId: String,
    name: String,
    description: String,
    image: String,
    price: Number,
    numberOfRooms: Number,    // Пользователь может выбрать любое количество комнат
    checkInDate: String,      // Дата заселения
    checkOutDate: String,     // Дата окончания
})

module.exports = model('apartments', apartmentSchema)