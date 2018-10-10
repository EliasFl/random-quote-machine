import React, { Component } from 'react';
import './App.css';
import store from './store';
import { getRandomQuote } from './actions';

class App extends Component {

  handleClick = () => {
    store.dispatch(getRandomQuote());
  };

  render() {
    document.body.style.backgroundColor = store.getState().color;

    const colorStyle = {
      color: store.getState().color,
    };

    const buttonsColor = {
      backgroundColor: store.getState().color,
    };

    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${store.getState().quote.quote}" - ${store.getState().quote.author}`;

    return ( 
      <div className="App">
        <div id='quoteBox'>
          <h2 style={colorStyle} id='quoteText'>
            <i className="fas fa-quote-left"></i>
            {store.getState().quote.quote}
          </h2>
          <span style={colorStyle} className='quoteAuthor'>- {store.getState().quote.author}</span>
          <div id='buttons'>
            <a 
            style={buttonsColor} 
            className='quoteBtn'
            href={tweetURL}
            target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <button onClick={this.handleClick} style={buttonsColor} className='quoteBtn'>New quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
