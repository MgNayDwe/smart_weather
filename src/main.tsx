import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./@core/store";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
const container = document.getElementById("root");
if (!container) throw new Error("Could not find root element with id 'root'");
ReactDOM.createRoot(container as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
