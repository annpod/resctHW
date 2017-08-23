import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import './Header.css';
import './Menu.css';

const Header = (isLogin) => {
    return (
        <div className="header">       
            <a href='#'><img src='./assets/logo.svg' alt='logo' /></a>
			<div className="authNav">
				{(isLogin) ? (
					<div>
						<Link to="/SignIn">Sign In</Link>
						<Link to="/SignUp">Sign Up</Link>
					</div>
					):(
					<Link to="/SignOut">Sign Out</Link>
					)
				}
			</div>
        </div>
    )
}
export default Header;