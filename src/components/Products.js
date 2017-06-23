import React, { Component } from 'react';
import { getProducts } from './../services/productService';

class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      data:[]
    }
  }


  render() {
    let theData = this.state.products.data;
    console.log('data: ', this.state);
    return (
      <div className="main-products">
        <h1>Products!</h1>
        <p>{this.state.products.name}</p>
        <p>{this.state.products.description}</p>
        <img src={this.state.data.image} className="App-logo" alt="logo" />
        <p>{this.state.data.image}</p>
        <p>{this.state.data.price}</p>
        <p>{this.state.data.rating}</p>
        <p>shipping: {this.state.data.shipping}</p>
        <p>{this.state.data.category}</p>
      </div>
    )
  }

  componentDidMount() {
    getProducts()
    .then((item) => {
      console.log('items: ', item);
       this.setState({
        products: item,
        data: JSON.parse(item.data)
      })
    })
  }
}

export default Products
