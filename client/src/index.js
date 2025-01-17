import React from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import {thunk} from "redux-thunk"
import reducers from "./reducers"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';



// Load auth state from localStorage if it exists
const persistedState = localStorage.getItem('profile') 
  ? { auth: { authData: JSON.parse(localStorage.getItem('profile')) } } 
  : {};

const store = createStore(
  reducers, 
  persistedState, // Use persisted auth state
  compose(applyMiddleware(thunk))
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);