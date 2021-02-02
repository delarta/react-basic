import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/reducers/rootReducer";

let store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
