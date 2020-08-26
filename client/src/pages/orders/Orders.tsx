import React from 'react'
import { Redirect } from 'react-router-dom'

function Orders() {
    return (
        <div>
            Orders
            {/* ЕСЛИ РОЛЬ ЮЗЕРА НЕ ПРОДАВЕЦ */}
            {false &&  <Redirect to="/products"/>}
        </div>
    )
}

export default Orders
