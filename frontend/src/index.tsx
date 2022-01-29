import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { FrontendApp } from "./frontendApp"
import Routes from "./routes"

ReactDOM.render(
    <BrowserRouter>
        <FrontendApp />
        <Routes />
    </BrowserRouter>
    ,
    document.getElementById("app")
)
// hot reloading. It works by replacing a module of the application 
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept()
