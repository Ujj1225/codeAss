import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import Form from "./Form.jsx";
import "./Main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Form />
  </React.StrictMode>
);
