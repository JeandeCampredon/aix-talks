import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import HomeSwitch from './HomeSwitch';

export default () => {
  return (
    <BrowserRouter>
      <HomeSwitch />
    </BrowserRouter>
  );
};
