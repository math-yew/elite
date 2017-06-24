import React, { Component } from 'react';
import './App.css';
import { getProducts } from './services/productService';
import Products from './components/Products';
import Edit from './components/Edit';

class App extends Component {
  constructor() {
    super();

    this.state = {
      product: []
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(newState) {
    this.setState({
     product: newState
   })
  }

  render() {
    return (
      <div className="App">
        <Products product={this.state.product} />
        <Edit product={this.state.product} updateState = {this.updateState} />
      </div>
    );
  }

  componentDidMount() {
    getProducts()
    .then((item) => {
      let product = JSON.parse(item.data);
      product.name = item.name;
      product.description = item.description;
       this.setState({
        product: product
      })
    })
  }
}

export default App;
