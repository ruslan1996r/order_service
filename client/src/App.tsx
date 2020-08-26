import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { AppState } from './store/configureStore';
import { logoutAction, getCurrentUserThunk } from "./store/actions/index"
import Header from "./components/Header"
import Login from "./pages/authPages/Login"
import Register from "./pages/authPages/Register"
import Orders from "./pages/orders/Orders"
import Apartments from "./pages/apartments/Apartments"
import Vouchers from "./pages/vouchers/Vouchers"

function App (props: any) {
const { getCurrentUserThunk, user, logoutAction, isAuth } = props

  const callback = useCallback(() => {
    return getCurrentUserThunk()
  },[user])
  
  useEffect(() => {
    callback()
  }, [user])
  
	return (
    <>
      <Header isAuth={isAuth} logout={logoutAction} user={user}/>
      {isAuth ?
        <div className="container p-4">
          <Switch>
            <Route component={Orders} path="/orders" exact />
            <Route component={Apartments} path="/apartments" exact />
            <Route component={Vouchers} path="/vouchers" exact />
            <Redirect to="/apartments" />
          </Switch>
        </div> 
         :
        <Switch>
          <Route component={Login} path="/login" exact />
          <Route component={Register} path="/register" exact />
          <Redirect to="/login"/>         
        </Switch>
      }
    </>
	);
}

const mapStateToProps = (state: AppState): any => ({
    isAuth: state.rootReducer.isAuth,
    user: state.rootReducer.user,
});

export default connect(mapStateToProps, { logoutAction, getCurrentUserThunk })(App);
