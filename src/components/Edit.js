import React, { Component } from 'react';
import { editProducts } from './../services/productService';

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
  }

  inputChange(type, event) {
    this.setState({
      ...this.state,
      [type]: event.target.value
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

  editProduct() {
    let myData = {
      image:'https://i5.walmartimages.com/asr/2b3c3baa-da59-4e6d-baa4-b3ebb52c91a9_1.31feca83963b536e29674b7c480c1d06.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      rating:4,
      shipping:true,
      price:40,
      category:'Toy'
    }

    let info = {
    	api_key:'math.u@hotmail.com',
    	name:'Razor Gogo Pog',
    	description:'This is the classic pogo stick modernized by Razor.  Wear a helmut when using this product',
    	data: myData
}
    editProducts(info)
  }

  render() {
    return (
      <div className="main-product">
        <h1>Edit!</h1>
        <p>Name:{this.state.name}</p>

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
