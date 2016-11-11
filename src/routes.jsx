import React from 'react';  
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';  
import HomePage from './components/pages/home-page.jsx';
import AnotherPage from './components/pages/another-page.jsx';
import NotFoundPage from './components/pages/not-found-page.jsx';

export default (  
	<Route path="/" component={App}>
	    <IndexRoute component={HomePage} />
	    <Route path="anotherpage" component={AnotherPage} />
	    <Route path="*" component={NotFoundPage} />
	</Route>
);