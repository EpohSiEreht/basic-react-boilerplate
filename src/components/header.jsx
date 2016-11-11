import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
	render() {
		return (
			<header>
				<div className="brand">
					<Link to="/" activeClassName="active">
						<img id="logo" src="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" />
					</Link>
					<h1>Reactiplate</h1>
				</div>
				<ul className="links">
					<li><Link to="/" activeClassName="active">Home</Link></li>
					<li><Link to="/page1" activeClassName="active">/page1</Link></li>
					<li><Link to="/page2" activeClassName="active">/page2</Link></li>
				</ul>
			</header>
		);
	}
}

export default Header;