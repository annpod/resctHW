import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import './Header.css';

const Header = ({isLogin,userName}) => {

    return (
        <div className="header">       
            <a href='#'><img src='https://upload.wikimedia.org/wikipedia/commons/d/df/Img_logo_blue.jpg' alt='logo' /></a>
			<div className="authNav">
				<div className="userName">{userName}</div>
				{(!isLogin) ? (
					<div>
						<Link className='Login' to="/SignIn">Log In</Link>
						<Link className='SignUp' to="/SignUp">Sign Up</Link>
					</div>
					):(
					<div>
						<Link to="/User">User</Link>
						<Link className='SignOut' to="/SignOut"><img src='http://www.iconsdb.com/icons/preview/caribbean-blue/logout-xxl.png' alt='Log out'/></Link>
					</div>
					)
				}
			</div>
        </div>
    )
}
export default Header;