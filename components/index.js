import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Showcase from './showcase';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Showcase />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./showcase', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./showcase').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
