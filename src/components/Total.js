import React,{useContext} from "react"
import {Context} from "../Context"

function Total(){
  const {cartItems} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    return <p className="total-cost">Total: {totalCostDisplay}</p>
}

export default Total