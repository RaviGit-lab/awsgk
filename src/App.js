import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"

import randomcolor from "randomcolor"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {

    
    return (
        <div>
            <Header />
            <Switch>
              <Route exact path="/"><Photos /> </Route>
              <Route path="/cart"><Cart /> </Route>            
            </Switch>}
        </div>
        
    )
}

export default App
