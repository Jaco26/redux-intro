import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Let's connect our App to the redux store
// connect is a function that will change the props on the 
// component it is called in
import { connect } from 'react-redux';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newElement: ''
    }
  }

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

  handleAddStar = () => {
    this.props.dispatch({
      type: 'ADD_STAR',
      payload: {
        name: 'Gacrux',
        diameter: 50,
      }
    });
  }

  handleChangeFor = () => (event) => {
    this.setState({
      newElement: event.target.value
    });
  } 

  handleNewElementSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_NEW_ELEMENT',
      payload: this.state.newElement,
    });
  }

  

  render() {
    console.log('THIS.STATE: render() is called when "state" OR "props" are changed',  this.state);
    
    return (
      <div className="App">

        <pre> {JSON.stringify(this.props.reduxState)} </pre>

        <button onClick={this.handleClick} >Button One!</button>
        <button onClick={this.handleSecondClick}>Button Two!</button>
        <button onClick={this.handleAddStar}>Add Star!</button>
        {/* Add an imput and button for the new element, (hydrogen, helium, etc) 
        and send it to redux Pass an element String as the payload */}
        <input onChange={this.handleChangeFor('newElement')} value={this.state.newElement} type="text" placeholder="new element" />
        <button onClick={this.handleNewElementSubmit}>Submit New Element!</button>


      </div>
    );
  }
}


const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

// connect is a function that returns another function that 
// we then pass our App into
export default connect(mapReduxStateToProps)(App);


/*
  const connected = connect();
  const connectedApp = connected(App);
  export default connectedApp
*/