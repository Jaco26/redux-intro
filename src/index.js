import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// createStore is a function
import { createStore } from 'redux';
// Provider is a component 
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


const storeInstance = createStore( 
    // This is a reducer
    () => {
    console.log(`Hey! I'm a reducer!`);
  
    
});


// Throw the App on the DOM
// Wrap the App in the Provider ... no spaces
// pass the Provider the storeInstance on props
// now, react knows where the redux box is
ReactDOM.render(<Provider store={storeInstance} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
