import { getRandomColor, getRandomQuote } from '../helpers';

export default (state, action) => {
  switch(action.type) {
    case 'GET_RANDOM_QUOTE':
      return Object.assign({}, state, {
        color: getRandomColor(),
        quote: getRandomQuote()
      });
    default:
      return state;
  }
};