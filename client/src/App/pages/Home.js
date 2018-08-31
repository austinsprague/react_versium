import React, { Component } from 'react';
import Item from './Item.js'
import Spinner from './Spinner.js'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      fistname: '',
      lastname: '',
      state: '',
      results:[],
      loading:false,
      hasSearched: false,
      button: {
        isDisabled: true
      },
      isDisabled:true
    }
  }

  validateInputs = ()=> {
    let state = this.state;
    const inputsExist = state.firstname && state.lastname && state.state;

    return (inputsExist ?
      (state.firstname.length !== 0 && state.lastname.length !== 0 && state.state.length !== 0)
      : false
    )
  }

  handleBlur = (event) => {
    const evtName = event.target.name;
    this.setState({
      touched: { ...this.state.touched, [evtName]: true },
    });
  }

  handleChange=(event)=> {
    const target = event.target;
    this.setState({[target.name]: target.value});
  }

  handleSubmit=(event)=> {
    this.setState({loading:true, hasSearched: false});

    const url = '/api/getList/' + this.state.firstname + "/" + this.state.lastname + "/" + this.state.state;
    fetch(url)
    .then(res => res.json())
    .then(list=>{
      this.setState({loading:false, results: list, hasSearched: true});
    });
    event.preventDefault();
  }

  render() {
    let {results, loading, hasSearched, button} = this.state;
    let renderListEmpty = (!results.length && !loading && hasSearched)?  <h3>No List Items Found</h3> : null;
    let itemComponents = (!loading && results.length )? results.map((data,idx)=>{
      return <Item data={data} key={idx} index={idx}></Item> }) : null;

    return (
      <div className="maincon">
        <h1 className=" title">Welcome to Versium People Search</h1>
        <div className="searchForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              FirstName
              <input disabled={loading} onBlur={this.handleBlur} type="text" name="firstname"  ref="firstname" onChange={this.handleChange}/>
            </label>
            <label>
              LastName
              <input disabled={loading} onBlur={this.handleBlur} type="text" name="lastname" ref="lastname" onChange={this.handleChange}/>
            </label>
            <label>
              State
              <input disabled={loading} onBlur={this.handleBlur} type="text" name="state" ref="state" onChange={this.handleChange}/>
            </label>
            <input type="submit" className="button" value="submit" disabled={!this.validateInputs() || loading}></input>
          </form>
        </div>
        <Spinner isLoading={loading} load={loading}></Spinner>
        <div>
          {itemComponents}
          {renderListEmpty}
        </div>
      </div>
    );
  }
}
export default Home;
