import React from 'react';
import  ReactDOM from 'react-dom';
import DevTools from './containers/DevTools';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from 'routes';
import 'semantic-ui/dist/semantic.min.css';
import createStore from 'components/redux/store';
import prepareData from './helpers/PrepareData';
import { browserHistory, match } from 'react-router';

const store = createStore(window.__INITIAL_STATE__);

function listenBeforeCb(location) {
  match({location, routes}, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });
  return true;
}

browserHistory.listenBefore(listenBeforeCb);
listenBeforeCb(window.location);


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store}/>,
  document.getElementById('devtools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);

export default App;
