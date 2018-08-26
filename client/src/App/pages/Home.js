import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './List.js'
import Spinner from './Spinner.js'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      state: '',
      results:[],
      loading:false
    }
  }

  handleChange=(event)=> {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  handleSubmit=(event)=> {
    this.setState({loading:true});

    fetch('/api/getList')
    .then(res => res.json())
    .then(list=>{
      this.setState({loading:false});
      this.setState({results: <List items={list}></List>});
    });
    event.preventDefault();
  }

  render() {
    return (
    <div className="App">
      <h1>Welcome to Versium People Search</h1>

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


      {/* Link to List.js */}
      {/* <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link> */}
      <p>{this.state.loading.toString()}</p>
      <div>
        {this.state.loading ? (
          <div>
            <Spinner></Spinner>
          </div>
        ) : (
          <div>
            {this.state.results}
          </div>
          )
        }
      </div>
    </div>
    );
  }
}
export default Home;
