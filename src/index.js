import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import pocReducer from "./reducer";
import reportWebVitals from "./reportWebVitals";

const poc = createStore(pocReducer);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={poc}>
    <App />
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
