import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch,Redirect } from 'react-router-dom';

import { AppState } from './store/configureStore';
import { logout } from "./store/actions/index"
import Header from "./components/Header"
import Login from "./pages/authPages/Login"
import Register from "./pages/authPages/Register"

// Здесь нужен useEffect на проверку isAuth

const App: React.FC = (props: any) => {
	return (
    <>
      <Header isAuth={props.isAuth} user={props.user} logout={props.logout}/>
      {props.isAuth ?
        <Switch>
          <Route component={function comp(){return <div>APARTMENTS</div>}} path="/" exact />
          <Redirect to="/" />         
        </Switch> :
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
    user: state.rootReducer.user
});

export default connect(mapStateToProps, { logout })(App);
