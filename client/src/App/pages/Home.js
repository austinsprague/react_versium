import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './List.js'


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      state: ''
    }
  }

  handleChange(event) {
    var obj = {};
    obj[event.name] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
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
      <List></List>
    </div>
    );
  }
}
export default Home;
