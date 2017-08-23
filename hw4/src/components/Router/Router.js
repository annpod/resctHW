import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import SignOut from '../auth/SignOut';

const Router = () => {
	return (
			<Switch>
				<Route exact path="/SignIn" component={SignIn}/>
				<Route path="/SignUp" component={SignUp}/>
				<Route path="/SignOut" component={SignOut}/>
			</Switch>
	)
}
export default Router;