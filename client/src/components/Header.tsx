import React from 'react'
import { useHistory, Link } from 'react-router-dom';

const Header: React.FC | any = (props: any) => {
  const history = useHistory()
  return (
    <header className="card">
      {props.isAuth ?
        <div className="row align-items-center text-center p-2">
            <h4
              role="button"
              className="pointer col"
              onClick={() => history.push('/register')}>
                Main page
            </h4>
            <h4
              onClick={props.logout}
              role="button"
              className="col">
              Logout ({props.user.name})
            </h4>
        </div>:
        <div className="row p-2">
          <h4 className="text-center col">Please, log in</h4>
        </div>}
    </header>
    )
}

export default Header
 