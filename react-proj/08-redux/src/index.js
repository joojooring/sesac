// 1. props drilling예시
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>
// );


// 2. redux적용
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux1 from './AppRedux1';

// import { Provider } from 'react-redux';
// import {configureStore} from "@reduxjs/toolkit"
// import { composeWithDevTools } from "redux-devtools-extension";

// // state : {number : 100}
// // const initialValue ={} : 초기값

// const initialValue ={ number : 100}
// const reducer = (state = initialValue, action)=>{
//   switch(action.type) {
//     case "INCREMENT" : 
//       return {number : state.number +1};
//     case "DECREMENT" :
//       return {number : state.number -1};
//     default :
//       return state; 
//   }
// }

// const store = configureStore({reducer: reducer}, composeWithDevTools())

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux1 />
//   </Provider>
// );


// 3. redux 구조화

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRedux2 from './AppRedux2';

import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store"

const store = configureStore({reducer: rootReducer}, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRedux2 />
  </Provider>
);

// 4. 리덕스 구조화 + containers 컴포넌트 폴더 / presentational 컴포넌트 폴더 분리
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux3 from './AppRedux3';

// import { Provider } from 'react-redux';
// import {configureStore} from "@reduxjs/toolkit"
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./store"

// const store = configureStore({reducer: rootReducer}, composeWithDevTools())

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux3 />
//   </Provider>
// );
