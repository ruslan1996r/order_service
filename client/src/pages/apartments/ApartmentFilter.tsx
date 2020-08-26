import React from 'react'

import { useInput } from '../../utils/hooks'

function ApartmentFilter(props: any) {
    const { filterFunction, userRole } = props

    const price = useInput("")
    const numberOfRooms = useInput("")
    const checkInDate = useInput("")
    const checkOutDate = useInput("")

    // добавлять квартиры тут по ифу
    const filterAparts = (e: any) => {
        e.preventDefault()
        const args = {
            price: Number(price.value),
            numberOfRooms: Number(numberOfRooms.value),
            checkInDate: checkInDate.value,
            checkOutDate: checkOutDate.value
        }
        filterFunction(args)
        console.log(args, "args")
    }

    const clearFilters = () => {
        filterFunction()
        price.clear()
        numberOfRooms.clear()
        checkInDate.clear()
        checkOutDate.clear()
    }

    return (
        <div>
            {/* ApartmentFilter {userRole} */}
            <form onSubmit={filterAparts} className="row">
                <input aria-label="Price" className="form-control m-1 col" placeholder="Price" {...price.bind} />
                <input className="form-control m-1 col" type="number" placeholder="Rooms" {...numberOfRooms.bind} />
                <div className="input-group m-1 col p-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">CheckIn</span>
                    </div>
                    <input className="form-control" aria-describedby="basic-addon1" type="date" {...checkOutDate.bind} />
                </div>
                <div className="input-group m-1 col p-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon2">CheckOut</span>
                    </div>
                    <input className="form-control" aria-describedby="basic-addon2" type="date" {...checkOutDate.bind} />
                </div>
                <button className="btn btn-primary m-1 col" type="submit">Find aparts</button>
                {(price.value || numberOfRooms.value || checkInDate.value || checkOutDate.value)
                    && <button className="btn btn-warning m-1 col" onClick={clearFilters}>Clear</button>}
            </form>
            
        </div>
    )
}

export default ApartmentFilter
