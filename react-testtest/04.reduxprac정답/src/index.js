// ----------3. 최상단 index.js파일에 store 넣고, 만든 reducer 반영

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store"

const store = configureStore({reducer: rootReducer}, composeWithDevTools())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
  </Provider>

);
