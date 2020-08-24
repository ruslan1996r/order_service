import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { useInput } from "../../utils/hooks"
import { registerUserThunk } from "../../store/actions"


function Register(props: any) {
    const name = useInput('')
    const lastname = useInput('')
    const email = useInput('')
    const role = useInput('buyer')

    const submit = (e:any) => {
        e.preventDefault()
        const newUser = {
            name:name.value,
            lastname:lastname.value,
            email:email.value,
            role:role.value
        }
        props.registerUserThunk(newUser)
    }

    return (
        <>
        <form className="container pt-5 col col-lg-6" onSubmit={submit}>
            <h1 className="mb-4">Register page</h1>
            <input className="form-control mb-4" placeholder="Name" {...name.bind} required/>
            <input className="form-control mb-4" placeholder="Lastname" {...lastname.bind} required/>
            <input className="form-control mb-4" placeholder="Email" {...email.bind} required/>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="roleSelect">Role</label>
                    </div>
                <select {...role.bind} className="custom-select" id="roleSelect">
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
            </div>
            <button className="btn btn-primary mb-4" type="submit">Register</button>
        </form>
        <Link to="/login">
            <h3 className="text-center">Log in</h3>
        </Link>
        </>
    )
}

export default connect(null, { registerUserThunk })(Register)