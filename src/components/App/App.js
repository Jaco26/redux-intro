import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Let's connect our App to the redux store
// connect is a function that will change the props on the 
// component it is called in
import { connect } from 'react-redux';


class App extends Component {
  // Arrow functions takes away the need to Bind
  handleClick = () => {
    // dispatch needs an Action: just an object with:
    // at minimum, a key of "type"
    this.props.dispatch(
      // THIS OBJECT IS THE ACTION
      {
        type: 'BUTTON_ONE'
      }
    )
  };

  handleSecondClick = () => {
    this.props.dispatch({
      type: 'BUTTON_TWO'
    })
  }

  

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick} >Button One!</button>
        <button onClick={this.handleSecondClick}>Button Two!</button>
      </div>
    );
  }
}

// connect is a function that returns another function that 
// we then pass our App into
export default connect()(App);


/*
  const connected = connect();
  const connectedApp = connected(App);
  export default connectedApp
*/