import React from 'react'
import {  Link } from 'react-router-dom';

const Header: React.FC | any = (props: any) => {
  const { isAuth, logout, user } = props
// user.role
  
  const logoutUser = (e: any) => {
    e.preventDefault()
    logout()
  }
  
  return (
    <header className="card">
      {
        isAuth ?
        <div className="row align-items-center text-center p-2">
            <Link to="/apartments" className="col">
              <h4>Apartments</h4>
            </Link>
             <Link to="/vouchers" className="col">
              <h4>Vouchers</h4>
            </Link>
            <Link to="/orders" className="col">
              <h4>Orders</h4>
            </Link>
            <a onClick={logoutUser} className="col" role="button">
              <h4>Logout</h4>
            </a>
        </div>:
        <div className="row p-2">
          <h4 className="text-center col">Please, log in</h4>
        </div>
      }
    </header>
    )
}

export default Header
 