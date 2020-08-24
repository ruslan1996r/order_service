import React from 'react'
import { connect } from 'react-redux';

import { useInput } from "../../utils/hooks"
import { loginUserThunk } from "../../store/actions/index"
import { Link } from 'react-router-dom';

function Login(props: any) {
    const email = useInput('')

    const submit = (e: any) => {
        e.preventDefault()
        const checkUser = {
            email:email.value,
        }
        props.loginUserThunk(checkUser)
    }
    return (
        <>
            <form className="container pt-5 col col-lg-6" onSubmit={submit}>
                <h1 className="mb-4">Login page</h1>
                <input className="form-control mb-4" placeholder="Email" {...email.bind} required/>
                <button className="btn btn-primary mb-4" type="submit">Login</button>
            </form>
            <Link to="/register">
                <h3 className="text-center">Register</h3>
            </Link>
        </>
    )
}

export default connect(null, { loginUserThunk })(Login)
