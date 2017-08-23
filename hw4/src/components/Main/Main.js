import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Main.css';
import Router from '../Router/Router';

export const Main = () => {
    return (
        <div className="main">
			<Router />
        </div>
    )
}
export default Main;