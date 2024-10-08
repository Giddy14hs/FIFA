import React from 'react';
import ReactDom from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import {thunk }from "redux-thunk"
import reducers from "./reducers"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const container = document.getElementById("root");
const root = ReactDom.createRoot(container)


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);