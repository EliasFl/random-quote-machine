import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      quote: {},
    }
  }

  componentDidMount() {
    this.changeColor();
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => {
        const quotes = response.data.quotes;
        const randomIndex = Math.round(Math.random() * (quotes.length - 1));
        this.setState({
          quote: quotes[randomIndex]
        });
      })
      .catch((error) => {
        console.log('An error has occurred: ' + error.message);
      });
  };

  changeColor = () => {
    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    const newColor = colors[Math.round(Math.random() * (colors.length - 1))];
    this.setState({
      color: newColor,
    });
  }

  handleClick = (event) => {
    this.changeColor();
    this.getRandomQuote();
  };

  render() {
    document.body.style.backgroundColor = this.state.color;

    const colorStyle = {
      color: this.state.color,
    };

    const buttonsColor = {
      backgroundColor: this.state.color,
    };

    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote.quote}" - ${this.state.quote.author}`;

    return ( 
      <div className="App">
        <div id='quoteBox'>
          <h2 style={colorStyle} id='quoteText'>
            <i className="fas fa-quote-left"></i>
            {this.state.quote.quote}
          </h2>
          <span style={colorStyle} className='quoteAuthor'>- {this.state.quote.author}</span>
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
