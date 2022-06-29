import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/RootReducer';


const initStore = (initialState = {}) => {

  return createStore(reducer, initialState, applyMiddleware(thunk));

};

export default initStore;