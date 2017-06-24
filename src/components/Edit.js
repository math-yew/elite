import React, { Component } from 'react';
import './../styles/edit.css';
import { editProducts } from './../services/productService';
let config = require('./../services/config.js');
let defaults = require('./../services/defaultData');


class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      image: '',
      price: '',
      rating: '',
      shipping: '',
      category: ''
    }

    this.inputChange = this.inputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  inputChange(type, event) {
    this.setState({
      ...this.state,
      [type]: event.target.value
    })
  }


    clearState() {
      this.setState({
        ...this.state,
        name: '',
        description: '',
        image: '',
        price: '',
        rating: '',
        shipping: '',
        category: ''
      })
    }

  handleChange(event) {
    let newState= (event.target.value === 'current') ? this.props.product : defaults.products[event.target.value*1];
    this.setState({
      ...this.state,
      name: newState.name,
      description: newState.description,
      image: newState.image,
      price: newState.price,
      rating: newState.rating,
      shipping: newState.shipping,
      category: newState.category
    })
  }

  adoptProps() {
    this.setState({
      ...this.state,
      name: this.props.product.name,
      description: this.props.product.description,
      image: this.props.product.image,
      price: this.props.product.price,
      rating: this.props.product.rating,
      shipping: this.props.product.shipping,
      category: this.props.product.category
    })
  }

  editProduct() {
    let info = {
      api_key:config.key,
      name: this.state.name,
      description: this.state.description,
      data: {
        image: this.state.image,
        price: this.state.price,
        rating: this.state.rating,
        shipping: this.state.shipping,
        category: this.state.category
      }
    }
    // let info = defaults.products[1];
    editProducts(info)
  }

  render() {
    return (
      <div className="main-edit">
        <h1>Edit!</h1>
        <p>Name:{this.state.name}</p>

        <select value={this.state.value} onChange={this.handleChange}>
          <option selected value="0"></option>
          <option value="current">current</option>
          <option value="1">Default Product 1</option>
          <option value="2">Default Product 2</option>
        </select>

        <input onChange={this.inputChange.bind(this,"name")} type="text" value={this.state.name} placeholder="Name" />
        <input onChange={this.inputChange.bind(this,"description")} type="text" value={this.state.description} placeholder="Description" />
        <input onChange={this.inputChange.bind(this,"image")} type="text" value={this.state.image} placeholder="Image" />
        <input onChange={this.inputChange.bind(this,"price")} type="text" value={this.state.price} placeholder="Price" />
        <input onChange={this.inputChange.bind(this,"rating")} type="text" value={this.state.rating} placeholder="Rating" />
        <input onChange={this.inputChange.bind(this,"shipping")} type="text" value={this.state.shipping} placeholder="Shipping" />
        <input onChange={this.inputChange.bind(this,"category")} type="text" value={this.state.category} placeholder="Category" />
        <button onClick={() =>
                            this.editProduct()
                          }>Edit</button>
        <button onClick={() =>
                            this.adoptProps()
                          }>Adopt</button>
        <button onClick={() =>
                            this.clearState()
                          }>Clear</button>
      </div>
    )
  }

  componentDidMount() {
    this.adoptProps()
  }


}

export default Edit
