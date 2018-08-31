import React, { Component } from 'react';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';


class Spinner extends Component {
  render() {
    let loading = this.props.isLoading;
    return(
      <div className="spinner">
        {
          loading ?
          <PreloaderIcon loader={Oval} size={150} strokeWidth={2} strokeColor="#006064" duration={400}/>
          : null
        }
      </div>
    )
  }
}
export default Spinner;
