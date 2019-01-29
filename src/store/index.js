import { createStore } from 'redux';
import { getRandomColor, getRandomQuote } from '../helpers';
import quotesReducer from '../reducers';

const initialState = {
  quote: getRandomQuote(),
  color: getRandomColor()
};

const store = createStore(
  quotesReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

