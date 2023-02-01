import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";
import { Auth0Provider } from "@auth0/auth0-react";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";
import "./assets/css/tailwind-output.css";

import Layout from "./components/layout/Layout";

const store = createStore(rootReducer);

document.title = "Tua CRM";

ReactDOM.render(
  <Auth0Provider
    domain="dev-v9m6ff3g.us.auth0.com"
    clientId="Hv81soi6mLMGeikXuJJo5nTz91w40b1G"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
