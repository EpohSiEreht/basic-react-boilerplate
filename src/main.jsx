import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';
import './styles/main.scss';


ReactDOM.render(
	<Router history={browserHistory} routes={routes} />, 
	document.getElementById('app')
);