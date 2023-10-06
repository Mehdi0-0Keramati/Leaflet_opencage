import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextC } from "./Context/ContextApi.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextC>
      <App />
    </ContextC>
  </React.StrictMode>
);
