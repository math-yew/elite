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
      image: [],
      price: '',
      rating: '',
      category: '',
      view: false,
      show: true,
      pics: ""
    }

    this.inputChange = this.inputChange.bind(this);
    this.preFillData = this.preFillData.bind(this);
  }

  inputChange(type, event) {
    let changedValue = event.target.value;
    if(changedValue==="true") changedValue = true;
    if(changedValue==="false") changedValue = false;
    this.setState({
      ...this.state,
      [type]: changedValue
    })
  }

  addImage(img) {
    let images = this.state.image;
    images.push(img.toString());
      if(images){
      this.setState({
        ...this.state,
        image: images
      })
    }
  }

  preFillData(event) {
    let newState= (event.target.value === 'current') ? this.props.product : defaults.products[event.target.value*1];
    this.setState({
      ...this.state,
      name: newState.name,
      description: newState.description,
      image: newState.image,
      price: newState.price,
      rating: newState.rating,
      category: newState.category
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
        category: this.state.category
      }
    }
    editProducts(info)
    .then(this.props.updateState(this.state))

  }

  viewEdit() {
    this.setState({
      ...this.state,
      view: !this.state.view,
      show: false
    })
    setTimeout(() => {this.setState({
      ...this.state,
      show: true })}, 1000);
  }


  render() {
    let test = 0;
    let view = 'main-edit'+(this.state.view===true?' view':'');
    let hide = {display:this.state.show?'block':'none'};
    const pictures = this.state.image.map((e,i) => <span key={i}>{e.slice(0,15)}... </span>);
    return (
      <div className={view}>
      <button style = {hide} className="overlap" onClick={() => this.viewEdit()}>Edit</button>
        <div className="center">
          <h1 style = {hide} className="x" onClick={() => this.viewEdit()}>X</h1>
          <div className="edit">
            <div className="edit-top">
              <select value={this.state.value} onChange={this.preFillData}>
                <option value="" disabled selected hidden>Autofill with....</option>
                <option value="0"></option>
                <option value="current">Current Values</option>
                <option value="1">Default Product 1</option>
                <option value="2">Default Product 2</option>
              </select>
            </div>
            <div className="edit-center">
              <div className="edit-left">
                <div className="input w-92">
                  <p style={this.state.name ? {display:'block'} :{display:'none'} }>Name</p>
                  <input onChange={this.inputChange.bind(this,"name")} type="text" value={this.state.name} placeholder="Name" />
                </div>
                <div className="input w-92">
                  <p style={this.state.description ? {display:'block'} :{display:'none'} }>Description</p>
                  <textarea onChange={this.inputChange.bind(this,"description")} type="text" value={this.state.description} placeholder="Description" />
                </div>
              </div>
              <div className="edit-left">
                <div className="row">
                  <div className="input w-46">
                    <p style={this.state.pics ? {display:'block'} :{display:'none'} }>Image</p>
                    <input onChange={this.inputChange.bind(this,"pics")} type="text" value={this.state.pics} placeholder="Image" />
                  </div>
                  <button className="image-button" onClick={() => this.addImage(this.state.pics)}>Add Image</button>
                  <p className="white list row font-11">Images: {pictures}</p>
                </div>
                <div className="row">
                  <select className="cat" value={this.state.category} onChange={this.inputChange.bind(this,"category")}>
                    <option value="" disabled selected hidden>Select Category....</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Toys">Toys</option>
                    <option value="Clothing">Clothing</option>
                  </select>
                </div>
                <div className="row">
                  <div className="input w-20">
                    <p style={this.state.price ? {display:'block'} :{display:'none'} }>Price($)</p>
                    <input className="center-text" onChange={this.inputChange.bind(this,"price")} type="text" value={this.state.price} placeholder="Price($)" />
                  </div>
                  <div className="input w-20">
                    <p style={this.state.rating ? {display:'block'} :{display:'none'} }>Rating</p>
                    <input className="center-text" onChange={this.inputChange.bind(this,"rating")} type="text" value={this.state.rating} placeholder="Rating" />
                  </div>

                </div>
              </div>

            </div>


            <div className="edit-bottom">
              <button className="submit-button" onClick={() => this.editProduct()}>Update</button>
            </div>
          </div>
        </div>

      </div>
    )
  }


}

export default Edit
