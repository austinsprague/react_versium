import React, { Component } from 'react';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';


class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [],
      loaded: false
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    if(this.state.loaded){
      this.setState({ loaded: false });
    }

    fetch('/api/getList')
    .then(res => res.json())
    .then(list => {
      if(list.length > 0){
        this.setState({ list });
      }
      this.setState({ loaded: true });
      return list;
    })
  }

  renderPreLoaderIcon() {
    // this.setState({
      // view:
      return <PreloaderIcon
        loader={Oval}
        size={150}
        strokeWidth={2}
        strokeColor="#006064"
        duration={400}
      />
    // })
  }

  renderList = (list) =>{
    // getList().then()

    return(
      <div>
        {list}
      </div>
      // list.map((item) => {
      //   return(
      //     <div>
      //       {item}
      //     </div>
      //   );
      // })
    )
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
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {this.renderList(list)}
          </div>
        ) : (
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

export default List;
