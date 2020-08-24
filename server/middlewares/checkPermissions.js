const { UserRole } = require("../schema/enums")

const checkPermissions = (req, res, next) => {
    // if(role === ...)
    // console.log("Проверить роль, отправляемую с фронта", req.headers.role)
    next()
}

module.exports = { checkPermissions }