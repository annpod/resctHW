import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import NotFound from '../ErrorPages/NotFound';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import SignOut from '../auth/SignOut';
import User from '../User/User';



const Router = ({login,logout}) => {
	return (
			<Switch>
				<Route exact path="/" component={props => <SignIn {...props} login={login} />} />
				<Route exact path="/SignIn" component={props => <SignIn {...props} login={login} />} />
				<Route path="/SignUp" component={SignUp} />
				<PrivateRoute path="/User" component={User}/>
				<PrivateRoute path="/SignOut" component={props => <SignOut {...props} logout={logout} />} />
				<Route path="*" component={NotFound} />
			</Switch>
	)
}
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		window.localStorage.getItem('token') ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/SignIn',
				state: { from: props.location }
			}}/>
		)
	)}/>
)
export default Router;