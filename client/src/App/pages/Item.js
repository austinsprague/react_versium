import React, { Component } from 'react';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';


class Item extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [],

    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => {
      this.setState({ list });
      return list;
    })
  }

  renderPreLoaderIcon() {
      return <PreloaderIcon
        loader={Oval}
        size={150}
        strokeWidth={2}
        strokeColor="#006064"
        duration={400}
      />
  }

  renderList = (list) =>{
    // getList().then()
    return(
      list.map((item) => {
        return(
          <div>
            {item}
          </div>
        );
      })
    )
  }

  renderListEmpty=()=>{
    return (
      <h2>No List Items Found</h2>
    )
  }


  render() {
    return (
      <div>
          <div>
            {this.renderPreLoaderIcon()}
            {this.renderListEmpty()}
          </div>
        )
      }
      </div>
    );
  }
}

export default Item;
