import React from "react"; // node_modules/react/index.js
import ReactDOM from "react-dom"; // node_modules/react-dom/index.js
import "bootstrap/dist/css/bootstrap.css"; // node_modules/bootstrap/.../file.css
import "./index.css"; // "эта папка/file.css"
import App from "./App";

ReactDOM.render(
	<App/>,
	document.querySelector("#root")
);
