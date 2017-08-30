import React, { Component } from 'react';
import './Footer.css';

const Footer = () => {
	let date =  new Date();
	let year = date.getFullYear();
    return (
        <div className="footer">       
           &copy; {year} Footer
        </div>
    )
}
export default Footer;