import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// createStore is a function
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider is a component 
import { Provider } from 'react-redux';
import logger from 'redux-logger';



import registerServiceWorker from './registerServiceWorker';



// This is a reducer
// It runs with an action –– an object with a key of "type"
// actions are "dispatched"
const firstReducer = (state = 0, action) => {
    switch (action.type) {
        case 'BUTTON_ONE':
            return state += 1;
        case 'BUTTON_TWO':
            return state -= 1;
        default: 
            return state;
    }
}

const secondReducer = (state = 0, action) => {
    if(action.type == 'BUTTON_TWO'){
        console.log('I am the second reducer and BUTTON_TWO DID IT');
    }
    return state;
}

// const thirdReducer = (state, action) => {
//     if(action.type == 'ADD_NEW_ELEMENT') {
//         console.log('THIS IS "ACTION":', action);
//         console.log('3rd Reducer!');
//     }
//     return {};
// }

const elementReducer = (state = [], action) => {
    if(action.type == 'ADD_NEW_ELEMENT') {
        console.log(action.payload);
        return [...state, action.payload]
        console.log('STATE', state);
    }
    return state;
}


const storeInstance = createStore( 
    // All reducer will run!
    combineReducers( {
        firstReducer,
        secondReducer,
        elementReducer
    }),
    applyMiddleware(logger)
   
);


// Throw the App on the DOM
// Wrap the App in the Provider ... no spaces
// pass the Provider the storeInstance on props
// now, react knows where the redux box is
ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
