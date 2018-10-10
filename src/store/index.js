import { createStore } from 'redux';
import { getRandomColor, getRandomQuote } from '../helpers';
import quotes from '../reducers';

const initialState = {
  quote: getRandomQuote(),
  color: getRandomColor()
};

const store = createStore(
  quotes, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

