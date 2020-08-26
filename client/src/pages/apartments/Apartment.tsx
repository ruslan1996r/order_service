import React,{ useEffect } from 'react'

import { useInput } from '../../utils/hooks'

function Apartment(props: any) {
    const { apartment, userRole, editApartmentThunk } = props 
    const { id, name, description, image, price, numberOfRooms, checkInDate, checkOutDate, user } = apartment
    
    const editMode = useInput(false)
    const nameI = useInput("")
    const descriptionI = useInput("")
    const numberOfRoomsI = useInput(0)
    const priceI = useInput(0)
    const checkInDateI = useInput("")
    const checkOutDateI = useInput("")

    useEffect(() => {
            nameI.changeVal(name)
            priceI.changeVal(price)
            descriptionI.changeVal(description)
            numberOfRoomsI.changeVal(numberOfRooms)
            checkInDateI.changeVal(checkInDate)
            checkOutDateI.changeVal(checkOutDate)
        },[apartment.id])

    const sumbit = () => {
        editMode.changeVal(false)
        const updatedApart = {
            id,
            name: nameI.value,
            price: Number(priceI.value),
            description: descriptionI.value,
            numberOfRooms: Number(numberOfRoomsI.value),
            checkInDate: checkInDateI.value,
            checkOutDate: checkOutDateI.value,
            image
        }
        editApartmentThunk(updatedApart)
    }
    const changeEdit = () => {
        editMode.changeVal(true)
    }
    return (
        <div className="col card" style={{ padding: "1em", maxWidth: "48%", margin: "1%" }}>
            {!editMode.value ?
            <>
                <button
                    style={{ right: "1em" }}
                    type="button" className="btn btn-primary position-absolute"
                    onClick={changeEdit}
                >Edit</button>
                <h3>Name: {name}</h3>
                <p>Description: <strong>{description}</strong></p>
                <p>Price: <strong>{price}</strong></p>
                <p>Rooms: <strong>{numberOfRooms}</strong></p>
                <p>Check in date: <strong>{checkInDate}</strong></p>
                <p>Check out date: <strong>{checkOutDate}</strong></p>
                <img src={image} alt={name} style={{ height: "200px", marginBottom: "1em" }} />
            </> :
            <>
                    <button
                        style={{ right: "1em" }}
                        type="button" className="btn btn-success position-absolute"
                        onClick={sumbit}
                    >Submit
                    </button>
                    <div className="row">
                        <h3 className="col-4">Name: </h3>
                        <input className="form-control col-5" {...nameI.bind}/>
                    </div>
                    <div className="row">
                        <p className="col-4">Description: </p>
                        <input className="form-control col-5" {...descriptionI.bind}/>
                    </div>
                    <div className="row">
                        <p className="col-4">Price: </p>
                        <input className="form-control col-5" {...priceI.bind}/>
                    </div>
                    <div className="row">
                        <p className="col-4">Rooms: </p>
                        <input className="form-control col-5" {...numberOfRoomsI.bind}/>
                    </div>
                    <div className="row">
                        <p className="col-4">Check in date: </p>
                        <input className="form-control col-5" type="date" {...checkInDateI.bind}/>
                    </div>
                    <div className="row">
                        <p className="col-4">Check out date: </p>
                        <input className="form-control col-5" type="date" {...checkOutDateI.bind}/>
                    </div>
                    <img src={image} alt={name} style={{ height: "200px", marginBottom: "1em" }} />      
            </>
            }
            {!user ?
                <button className='btn btn-danger' disabled>Already ordered</button> : 
                <button className='btn btn-success'>Order</button>
            }
        </div>
    )
}

export default Apartment
