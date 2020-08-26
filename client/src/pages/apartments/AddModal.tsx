import React, {useEffect} from 'react'

import { useInput } from '../../utils/hooks'

function EditModal(props: any) {
    const { addApart } = props
    
    const nameI = useInput("")
    const descriptionI = useInput("")
    const numberOfRoomsI = useInput(0)
    const priceI = useInput(0)
    const checkInDateI = useInput("")
    const checkOutDateI =useInput("")

    const submit = () => {
        const newApart = {
            name: nameI.value,
            price: Number(priceI.value),
            description: descriptionI.value,
            numberOfRooms: Number(numberOfRoomsI.value),
            checkInDate: checkInDateI.value,
            checkOutDate: checkOutDateI.value,
        }
        addApart(newApart)
        nameI.clear()
        priceI.clear()
        descriptionI.clear()
        numberOfRoomsI.clear()
        checkInDateI.clear()
        checkOutDateI.clear()
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={submit} >
                    <div className="input-group col mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="recipient-name">Name</span>
                    </div>
                        <input className="form-control" id="recipient-name" {...nameI.bind} required/>
                    </div>
                    
                    <div className="input-group col mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="recipient-name">Description</span>
                    </div>
                        <input className="form-control" id="recipient-name" {...descriptionI.bind} required/>
                    </div>
                    
                     <div className="input-group col mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="recipient-name">Price</span>
                    </div>
                        <input className="form-control" id="recipient-name" {...priceI.bind} required/>
                    </div>

                      <div className="input-group col mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text"  id="recipient-name">Rooms</span>
                    </div>
                        <input className="form-control" type="number" id="recipient-name" {...numberOfRoomsI.bind} required/>
                    </div>     

                    <div className="input-group col mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="recipient-name">Check in</span>
                    </div>
                        <input className="form-control" type="date" id="recipient-name" {...checkInDateI.bind} required/>
                    </div>   

                     <div className="input-group col mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="recipient-name">Check out</span>
                    </div>
                        <input className="form-control" type="date" id="recipient-name" {...checkOutDateI.bind} required/>
                    </div> 
                     <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Add apart</button>
                </div>
                    </form>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default EditModal
