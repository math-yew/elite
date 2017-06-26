import React, { Component } from 'react';
import './../styles/products.css';
import Thumb from './Thumb';
import stars1 from './../images/stars1.png';
import stars2 from './../images/stars2.png';
import stars3 from './../images/stars3.png';
import stars4 from './../images/stars4.png';
import stars5 from './../images/stars5.png';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageNumber: 0
    }

  }

  changeImage = (number) => {
    this.setState({
      ...this.state,
     imageNumber: number
   })
  }

  render() {
    console.log('this.props.product: ', this.props.product.image);
    let rate = this.props.product.rating;
    let stars = rate === 5 ? stars5 : rate === 4 ? stars4 : rate === 3 ? stars3 : rate === 2 ? stars2 : stars1
    let length = this.props.product.image.length;
    let thumbWidth = length < 4 ? 82*length : 246;
    let imageNumber = this.state.imageNumber;
    const images = this.props.product.image.map((e,i) => <div onClick={this.changeImage.bind(this, i)}><Thumb image={e} i={i} key={i} /></div>)




    return (
      <div className="main-product">
        <div className="left">
          <div className="center">
            <div className="image-container">
              <img src={this.props.product.image[imageNumber]} className="pic" />
            </div>
            <div className="thumbnails">
              <div className="center" style={{width:thumbWidth+'px'}}>
                {images}
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="center">
            <h2>{this.props.product.name}</h2>
            <img src={stars} className="stars" />
            <br/>
            <h3>${this.props.product.price}</h3>
            <p>{this.props.product.description}</p>
            <p>Category: {this.props.product.category}</p>
          </div>
        </div>
      </div>
    )
  }

  componentWillMount() {
  let images = [];
  let length = this.props.product.image.length;
  }

}

export default Products
