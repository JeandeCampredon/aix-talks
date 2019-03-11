import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

async function start() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./serviceWorker.js', {
        scope: './controlled',
      })
      .then(registration => {
        console.log('Service Worker Registered');
        registration.update();
      });

    navigator.serviceWorker.ready.then(() => {
      console.log('Service Worker Ready');
    });
  }

  if (!window.Intl) {
    window.Intl = await import(/* webpackChunkName: "intl" */ 'intl');
  }

  ReactDOM.render(<App />, document.getElementById('root'));
}

start();
