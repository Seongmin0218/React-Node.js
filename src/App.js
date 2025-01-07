import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="gray_background">
        <img src={logo} lat="logo" />
        <h2>Let's develop management system!</h2>
      </div>
    );
  }
}

export default App;
