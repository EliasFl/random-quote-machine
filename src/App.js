import React, { Component } from 'react';
import './App.css';
import { getRandomQuote } from './actions';

//React-redux
import { connect } from 'react-redux';

class App extends Component {

  handleClick = () => {
    this.props.getQuote();
  };

  render() {
    const color = this.props.color;
    document.body.style.backgroundColor = color;

    const colorStyle = {
      color: color,
    };

    const buttonsColor = {
      backgroundColor: color,
    };

    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.props.quote.quote}" - ${this.props.quote.author}`;

    return ( 
      <div className="App">
        <div id='quoteBox'>
          <h2 style={colorStyle} id='quoteText'>
            <i className="fas fa-quote-left"></i>
            {this.props.quote.quote}
          </h2>
          <span style={colorStyle} className='quoteAuthor'>- {this.props.quote.author}</span>
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

const mapStateToProps = (state) => {
  return {
    color: state.color,
    quote: state.quote
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuote: () => {
      dispatch(getRandomQuote);
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
