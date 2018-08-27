import React, { Component } from 'react';


class Item extends Component {
  constructor(props){
    super(props);
    this.state = {...props}
  }

  render() {
    let {data, index} = this.state;
    index = parseInt(index) + 1;

    return (
      <div>
        <h5>Result #{index}</h5>
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
