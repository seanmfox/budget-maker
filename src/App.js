import React, { Component } from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import Header from './Header'
import Budget from './Budget';
import Footer from './Footer';
import NewCategory from './NewCategory'

class App extends Component {

  state = {
    categories: [{desc: 'Primary', type: 'income', value: 0}, {desc: 'Rent', type: 'expense', value: 0}]
  }

  categoryUpdate = (value, category, type) => {
    this.setState((prevState) =>
      ({categories: prevState.categories.map((cat) => {
      if(cat.desc === category) {
        cat.value = Number(value)
        return cat
      } else {
        return cat
      }
    })})
    )
  }

  newItem = (name, type) => {
    this.setState((prevState) => (
      {categories: prevState.categories.concat([{'desc': name, 'type': type, 'value': 0}])}
    ))
  }


  render() {
    const { categories } = this.state

    return (
      <div className="App">
        <Header />
        <Budget 
          fromCategoryUpdate = {(value, category, type) => {this.categoryUpdate(value, category, type)}}
          categories = { categories }
        />
        <NewCategory
          onNewItem = {(name, type) => {this.newItem(name, type)}}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
