import React from 'react';

import { hot } from 'react-hot-loader';

import { Global } from '@emotion/core';

import Router from './components/Router';
import globalStyle from './globalStyle';

const App = () => {
  return (
    <React.Fragment>
      <Global styles={globalStyle} />
      <Router />
    </React.Fragment>
  );
};

export default hot(module)(App);
