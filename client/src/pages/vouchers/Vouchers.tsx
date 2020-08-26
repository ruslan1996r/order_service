import React, { useEffect, useCallback } from 'react'
import { connect } from "react-redux"

import { getVouchersThunk } from "../../store/actions/index"
import { AppState } from '../../store/configureStore';
import { Voucher } from '../../types';
import VoucherComponent from "./Voucher"
import VoucherFilter from './VoucherFilter'

function Vouchers(props: any) {
    const { getVouchersThunk, vouchers, user } = props

    const callback = useCallback(()=>{
      return getVouchersThunk()
    }, [vouchers])
    
    useEffect(() => {
        callback()
    },[])

    return (
        <>
            <h1 className="text-center">Vouchers</h1>
            <VoucherFilter filterFunction={getVouchersThunk}/>
            {vouchers.length? <div className="row row-cols-2">
                {vouchers.map((voucher: Voucher) => {
                    return <VoucherComponent key={voucher.id} voucher={voucher} userRole={user.role}/>
                })}
            </div> : <h2>No vouchers found</h2>}
        </>
    )
}

const mapStateToProps = (state: AppState): any => ({
    vouchers: state.rootReducer.vouchers,
    user: state.rootReducer.user
});

export default connect(mapStateToProps, { getVouchersThunk })(Vouchers)
