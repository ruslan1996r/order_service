import React, { useEffect, useCallback } from 'react'
import { connect } from "react-redux"

import { getApartmentsThunk, editApartmentThunk, addApartmentThunk } from "../../store/actions/index"
import { AppState } from '../../store/configureStore';
import { Apartment } from '../../types';
import ApartmentComponent from "./Apartment"
import ApartmentFilter from "./ApartmentFilter"
import AddModal from "./AddModal"

function Apartments(props: any) {
    const { getApartmentsThunk, apartments, user, editApartmentThunk, addApartmentThunk } = props

    const callback = useCallback(()=>{
      return getApartmentsThunk()
    }, [apartments])

    useEffect(() => {
        callback()
    }, [])

    return (
        <>
            <h1 className="text-center">Apartments</h1>
            {user.role === "seller" && <><button style={{ right: "1em" }} type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Add apart</button>
            <AddModal addApart={addApartmentThunk}/></>}
            <ApartmentFilter filterFunction={getApartmentsThunk} userRole={user.role} />
            {apartments.length? <div className="row row-cols-2">
                {apartments.map((apartment: Apartment) => {
                    return <ApartmentComponent
                        key={apartment.id}
                        apartment={apartment}
                        userRole={user.role}
                        editApartmentThunk={editApartmentThunk}
                    />
                })}
            </div> : <h2>No apartments found</h2>}
        </>
    )
}

const mapStateToProps = (state: AppState): any => ({
    apartments: state.rootReducer.apartments,
    user: state.rootReducer.user,
});

export default connect(mapStateToProps, { getApartmentsThunk, editApartmentThunk, addApartmentThunk })(Apartments)
