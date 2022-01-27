import React from "react";
import ReactDOM from "react-dom";

import FrontendApp from "./FrontendApp";

ReactDOM.render(<FrontendApp />, document.getElementById("app"));
// hot reloading. It works by replacing a module of the application 
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();
