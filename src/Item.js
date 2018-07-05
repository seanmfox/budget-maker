import React, { Component } from 'react';

class Item extends Component {

  valueChange = (value, category, type) => {
    this.props.onCategoryUpdate(value, category, type)
  }

  render() {
    const { items } = this.props

    return (
      <React.Fragment>
        {items.map((item) => (
          <tr key={item.desc}>
            <td><span>{item.desc}</span></td>
            <td><input type="number" name={item.desc} value={item.value !== 0 && item.value} onChange={(e) => this.valueChange(e.target.value, item.desc, item.type)}></input></td>
          </tr>
          ))}
      </React.Fragment>
    );
  }
}

export default Item;