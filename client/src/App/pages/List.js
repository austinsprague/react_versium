import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: this.props.items,
      loaded: false
    }
  }

  renderList = () =>{
      return(
        <div>
          {this.state.list}
        </div>
      )
    // return(
    //   <div>
    //     {this.state.list}
    //   </div>
    //   // list.map((item) => {
    //   //   return(
    //   //     <div>
    //   //       {item}
    //   //     </div>
    //   //   );
    //   // })
    // )
  }

  renderListEmpty=()=>{
    return (
      <h2>No List Items Found</h2>
    )
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        {list.length ? (
          <div>
            {this.renderList()}
          </div>
        ) : (
          <div>
            {this.renderListEmpty()}
          </div>
        )
      }
      </div>
    );
  }
}

export default List;
