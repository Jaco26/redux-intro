import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// createStore is a function
import { createStore, combineReducers } from 'redux';
// Provider is a component 
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


// This is a reducer
// It runs with an action –– an object with a key of "type"
// actions are "dispatched"
const firstReducer = (state, action) => {
    // console.log(`Hey! I'm a reducer!`);
    if(action.type == 'BUTTON_ONE') {
        const random = () => Math.random() * 255;
        document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()} )`;
    }
   return {};
}

const secondReducer = (state, action) => {
   
    if(action.type == 'BUTTON_TWO'){
         console.log('I am the second reducer and BUTTON_TWO DID IT');

    }
    return {};
}

const thirdReducer = (state, action) => {
    if(action.type == 'ADD_NEW_ELEMENT') {
        console.log('THIS IS "ACTION":', action);
        console.log('3rd Reducer!');
    }

    
    return {};
}


const storeInstance = createStore( 
    // All reducer will run!
    combineReducers( {
        firstReducer,
        secondReducer,
        thirdReducer
    })
   
   
);


// Throw the App on the DOM
// Wrap the App in the Provider ... no spaces
// pass the Provider the storeInstance on props
// now, react knows where the redux box is
ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
