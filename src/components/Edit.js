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
      shipping: false,
      category: '',
      view: false,
      show: true,
      pics: ""
    }

    this.inputChange = this.inputChange.bind(this);
    this.preFillData = this.preFillData.bind(this);
  }

  inputChange(type, event) {
    console.log('event.target.value: ', event.target.value);
    let changedValue = event.target.value;
    if(changedValue==="true") changedValue = true;
    if(changedValue==="false") changedValue = false;
    this.setState({
      ...this.state,
      [type]: changedValue
    })
  }

  addImage(image) {
    let images = this.state.image;
    images.push(image.toString());
      if(images){
      this.setState({
        ...this.state,
        pics: images
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
      shipping: newState.shipping,
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
        shipping: this.state.shipping,
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
                <input className="w-92" onChange={this.inputChange.bind(this,"name")} type="text" value={this.state.name} placeholder="Name" />
                <textarea className="w-92" onChange={this.inputChange.bind(this,"description")} type="text" value={this.state.description} placeholder="Description" />
              </div>
              <div className="edit-left">
                <p className="white">Images: <span className="font-11">{pictures}</span></p>
                <input className="w-46" onChange={this.inputChange.bind(this,"pics")} type="text" value={this.state.pics} placeholder="Image" />
                <button className="" onClick={() => this.addImage(this.state.pics)}>Add Image</button>
                <input className="w-20" onChange={this.inputChange.bind(this,"price")} type="text" value={this.state.price} placeholder="Price" />
                <input className="w-20" onChange={this.inputChange.bind(this,"rating")} type="text" value={this.state.rating} placeholder="Rating" />
                <label>
                  <span className="white">Yes</span>
                  <input onChange={this.inputChange.bind(this,"shipping")} type="checkbox" name="myRadioInput" defaultChecked={this.state.shipping == true} value={true} />
                  <span className="white">No</span>
                  <input onChange={this.inputChange.bind(this,"shipping")} type="checkbox" name="myRadioInput" defaultChecked={this.state.shipping == false} value={false} />
                </label>
                <input className="w-46" onChange={this.inputChange.bind(this,"category")} type="text" value={this.state.category} placeholder="Category" />
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
