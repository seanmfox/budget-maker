import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Budget from './Budget';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Budget />
        <Footer />
      </div>
    );
  }
}

export default App;
