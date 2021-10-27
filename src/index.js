import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "../src/home-assignment-6/App";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

