import React, { Component } from 'react';
import PhoneList from './PhoneList/PhoneList';
import Editor from './Editor/Editor';
import './App.css';

class App extends Component {
  state ={
    phone: {}
  }

  setPhone = (phone) => this.setState({phone});
  
  render() {
    const {phone} = this.state;

    return (
      <div className="App">
        <PhoneList onClick={this.setPhone} />
        <Editor phone={phone} />
      </div>
    );
  }
}

export default App;
