import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home, NumberGuesser } from "./components"

export default (): JSX.Element => (
    <Routes>
        <Route path="/number-guesser">
            <NumberGuesser aProp="Lizard" />
        </Route>
        <Route path="/">
            <Home aProp="Wizard" />
        </Route>
    </Routes>
)