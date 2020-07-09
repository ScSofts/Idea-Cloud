import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.css";
import { locale } from "./config/config";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

document.title = locale.title;
