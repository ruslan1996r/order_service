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

// apartmentSchema.statics.getFindParams = function (arguments, cb) {
//     const filters = {}
//     for (arg in arguments) {
//         if (arguments[arg]) {
//             if (arg === "checkInDate") {
//                 filters[arg] = { $lte: arguments[arg] }
//             } else if (arg === "checkOutDate") {
//                 filters[arg] = { $gte: arguments[arg] }
//             } else {
//                 filters[arg] = arguments[arg]
//             }
//         }
//     }
//     return filters
// }

module.exports = model('apartments', apartmentSchema)