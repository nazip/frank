import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import API from 'middleware/API'; 
import DevTools from 'containers/DevTools';

const store = (initialState) =>  createStore(
  reducers,
  initialState,
  compose(applyMiddleware(API),
    DevTools.instrument()));

export default store;
