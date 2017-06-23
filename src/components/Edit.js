import React, { Component } from 'react';
import { editProducts } from './../services/productService';

class Edit extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      data:[]
    }
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
    let theData = this.state.products.data;
    console.log('data: ', this.state);
    return (
      <div className="main-products">
        <h1>Edit!</h1>
        <button onClick={() =>
                            this.editProduct()
                          }>Edit</button>
      </div>
    )
  }


}

export default Edit
