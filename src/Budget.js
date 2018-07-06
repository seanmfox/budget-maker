import React, { Component } from 'react';
import Item from './Item'
// import { Link } from 'react-router-dom'

class Budget extends Component {

  activateModal = () => {
    let modal = document.querySelector('.new-category-container');
    modal.classList.toggle('modal-hide');
  }

  toCategoryUpdate = (value, category, type) => {
    this.props.fromCategoryUpdate(value, category, type)
  }

  render() {
    const { categories } = this.props
    const incomeItems = categories.filter((item) => item.type === 'income')
    const expenseItems = categories.filter((item) => item.type === 'expense')
    let total = incomeItems.reduce((acc, val) => acc + val.value, 0) - expenseItems.reduce((acc, val) => acc + val.value, 0)

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Income</th>
          </tr>
          </thead>
              <tbody>
                <Item 
                  items = { incomeItems }
                  onCategoryUpdate = {(value, category, type) => {this.toCategoryUpdate(value, category, type)}}
                />
              </tbody>
              <thead>
                <tr>
          <th>Expenses</th>
          </tr>
          </thead>
              <tbody>
                <Item 
                  items = { expenseItems }
                  onCategoryUpdate = {(value, category, type) => {this.toCategoryUpdate(value, category, type)}}
                />
              </tbody>
              <thead>
                <tr>
          <th>Total</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" value={total} disabled></input></td>
            </tr>
            </tbody>
          </table> 
        <div>
          <button onClick={(e) => this.activateModal()}>Add a category</button>
        </div> 
    </div>
    );
  }
}

export default Budget;