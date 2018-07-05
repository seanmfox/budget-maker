import React, { Component } from 'react';

class Budget extends Component {
  state = {
    categories: [{desc: 'Primary', type: 'income', value: 0}, {desc: 'Rent', type: 'expense', value: 0}],
  }

  incomeUpdate = (income) => {
    this.setState({ income })
  }

  categoryUpdate = (value, category, type) => {
    this.setState((prevState) =>
      ({categories: prevState.categories.map((cat) => {
      if(cat.desc === category) {
        // cat.desc = category
        // cat.type = type
        cat.value = value
        return cat
      } else {
        return cat
      }
    })})
    )
  }

  render() {
    const { categories } = this.state
    const incomeItems = categories.filter((item) => item.type === 'income')
    const expenseItems = categories.filter((item) => item.type === 'expense')
    const total = incomeItems.reduce((acc, val) => acc + val.value, 0) - expenseItems.reduce((acc, val) => acc + val.value, 0)


    return (
      <div>
        <h2>Income</h2>
          <ol>
            {incomeItems.map((item) => (
              <li key={item.desc}><span>{item.desc}</span><input type="text" name={item.desc} onChange={(e) => this.categoryUpdate(e.target.value, item.desc, item.type)}></input></li>
            ))}
          </ol>
        <h2>Expenses</h2>
          <ol>
          {expenseItems.map((item) => (
              <li key={item.desc}><span>{item.desc}</span><input type="text" name={item.desc} onChange={(e) => this.categoryUpdate(e.target.value, item.desc, item.type)}></input></li>
            ))}            </ol>
        <h2>Total</h2>
          <input type="text" value={total} disabled></input>
      </div>
    );
  }
}

export default Budget;