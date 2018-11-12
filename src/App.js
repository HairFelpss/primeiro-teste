import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  name = 'felipe'
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput name="Felipe"/>
        <UserOutput name="Nainy"/>
        <UserOutput name="Salomao"/>
      </div>
    );
  }
}

export default App;
