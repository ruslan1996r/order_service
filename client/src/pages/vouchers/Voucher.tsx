import React from 'react'

function Voucher(props: any) {
    const { userRole, voucher } = props
    console.log(voucher, "voucher?");
    return (
        <div className="col card">
            Voucher {voucher.name}
        </div>
    )
}

export default Voucher
