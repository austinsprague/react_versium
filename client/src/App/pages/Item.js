import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {...props}
  }

  render() {
    let {data, index} = this.state;
    const resultNum = parseInt(index) + 1;

    return (
      <div className="content-child">
        <h3>Result #{resultNum}</h3>
        <p>FirstName: {data.FirstName}</p>
        <p>LastName: {data.LastName}</p>
        <p>Address: {data.Address}</p>
        <p>City: {data.City}</p>
        <p>State: {data.State}</p>
      </div>
    );
  }
}

export default Item;
