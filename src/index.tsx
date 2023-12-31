import "./styles/reset.css";
import "./styles/variables.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

if (process.env.REACT_APP_USE_MOCK_API) {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
