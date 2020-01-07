import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"

import randomcolor from "randomcolor"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
       if(count>0){
            setCount((prevCount) => {
              return prevCount - 1
            })
          }
    }
    
    useEffect(() => {
      if (count > 0 ){
        setColor(randomcolor())
    }else{setColor("red")} }, [count])
    
    
    
    return (
        <div>
            <Header />
            <Switch>
              <Route exact path="/"><Photos /> </Route>
              <Route path="/cart"><Cart /> </Route>            
            </Switch>
            {/*
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

          
            <div class="aplphaGrid">
              <span class="alphabet_box" style={{backgroundColor:randomcolor()}}>A</span>
              <span class="alphabet_box" style={{backgroundColor:randomcolor()}}>B</span>
            </div>
            */}
        </div>
        
    )
}

export default App
