import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import SearchIndex from './components/search_index';

export default(
  <Route path="/" component={App}>
    <Route path="search" component={SearchIndex} />
  </Route>
);
