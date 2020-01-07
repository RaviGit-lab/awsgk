import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"
import Total from "./Total"

function Header() {
    const {cartItems} = useContext(Context)
    //const cartClass = cartItems.length >0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/"><h1><i className="ri-home-heart-fill  ri-fw ri-2x"></i>Print Photos</h1></Link>
           {/* <Link to="/cart"><i className={cartClass}></i></Link> */}

             <Link to="/cart" title="Go to Checkout Page"><i className={`${cartClassName} ri-fw ri-2x`}></i>
             <Total /></Link>
             
        </header>
    )
}

export default Header
