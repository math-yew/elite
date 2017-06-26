import React, { Component } from 'react';
import './../styles/thumb.css';

class Thumb extends Component {

  constructor(props){
    super(props);
  }

  render() {
    let url = this.props.image;
    let background =  {backgroundImage:"url("+url+")"};
    return (
      <div className="thumb-main" style={background}></div>
    )
  }
}

export default Thumb
