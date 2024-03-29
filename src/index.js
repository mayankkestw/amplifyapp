import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
