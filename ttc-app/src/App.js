import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {rootReducer} from "./reducers/app"
import TTCSched from "./TTCSched"

import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <TTCSched/>
    </div>
    </Provider>
  );
}

export default App;
