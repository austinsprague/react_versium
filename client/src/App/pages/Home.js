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
      firstname: '',
      lastname: '',
      state: '',
      results:[],
      loading:false,
      hasSearched: false
    }
  }

  handleChange=(event)=> {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  handleSubmit=(event)=> {
    this.setState({loading:true, hasSearched: false});

    fetch('/api/getList')
    .then(res => res.json())
    .then(list=>{
      this.setState({loading:false, results: list, hasSearched: true});
    });
    event.preventDefault();
  }

  render() {
    let {results, loading, hasSearched} = this.state;
    let loadingSpinner = loading ? <Spinner className="spinner"></Spinner> : null;
    let renderListEmpty = (!results.length && !loading && hasSearched)?  <h3>No List Items Found</h3> : null;
    let itemComponents = (!loading && results.length )? results.map((data,idx)=>{
      return <Item data={data} key={idx} index={idx}></Item> }) : null;

    return (
      <div className="App">
        <h1 className="title">Welcome to Versium People Search</h1>
        <div className="searchform">
          <form onSubmit={this.handleSubmit}>
            <label>
              FirstName:
              <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
            </label>
            <label>
              LastName
              <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
            </label>
            <label>
              State
              <input type="text" name="state" value={this.state.state} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="display">
          {loadingSpinner}
          {itemComponents}
          {renderListEmpty}
        </div>

      </div>

    );
  }
}
export default Home;
