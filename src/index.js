import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { reducer } from './reducer'
import { Provider } from 'react-redux'

// store needs

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log("before like", store.getState())
// store.dispatch({type: "LIKE"})
// console.log("after like", store.getState())
// store.dispatch({type: "LIKE"})
// store.dispatch({type: "LIKE"})
// store.dispatch({type: "LIKE"})
// store.dispatch({type: "TOGGLE"})
// console.log("after like", store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
