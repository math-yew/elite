import React, { Component } from 'react';
import './../styles/products.css';

class Products extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="main-product">
        <h1>Products!</h1>
        <p>{this.props.product.name}</p>
        <p>{this.props.product.description}</p>
        <img src={this.props.product.image} className="App-logo" alt="logo" />
        <p>{this.props.product.image}</p>
        <p>{this.props.product.price}</p>
        <p>{this.props.product.rating}</p>
        <p>shipping: {this.props.product.shipping}</p>
        <p>{this.props.product.category}</p>
      </div>
    )
  }

}

export default Products
