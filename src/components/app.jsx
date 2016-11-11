import React, { Component } from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

class App extends Component {
	render() {
	    return (
	        <div>
	        	<Header />
	        	<div className="main">
                    {this.props.children}
                </div>
	        	<Footer />
	        </div>
	    );
	}
}

export default App;