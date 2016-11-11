import React from 'react';  
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';  
import HomePage from './components/pages/home-page.jsx';
import PageOne from './components/pages/page1.jsx';
import PageTwo from './components/pages/page2.jsx';
import NotFoundPage from './components/pages/not-found-page.jsx';

export default (  
	<Route path="/" component={App}>
	    <IndexRoute component={HomePage} />
	    <Route path="page1" component={PageOne} />
	    <Route path="page2" component={PageTwo} />
	    <Route path="*" component={NotFoundPage} />
	</Route>
);