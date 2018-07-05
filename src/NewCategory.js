import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class NewCategory extends Component {
  
  closeModal = () => {
    let modal = document.querySelector('.new-category-container');
    modal.classList.toggle('modal-hide');
  }

  handleSumit = (e) => {
    e.preventDefault()
    const itemName = document.querySelector('.item-name').value
    const itemType = document.querySelector('.item-type').value
    this.props.onNewItem(itemName, itemType)
  }

  render() {

    return (
      <div className="new-category-container modal-hide">
        <div className="modal">
          <form onSubmit={(e) => this.handleSumit(e)}>
            <label>
              Item Name
              <input type="text" className="item-name"></input>
            </label>
            <label>
              Item Type
              <select className="item-type">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </label>
            <input type="submit" value="Add Item"></input>
          </form>
          <button className="close-btn" onClick={(e) => this.closeModal()}>Back</button>
        </div>
        <div className="overlay">
        </div>
      </div>
    );
  }
}

export default NewCategory;