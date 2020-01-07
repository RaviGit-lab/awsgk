import React, {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    //const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
    
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    
    return (
        <div className="cart-item">
            <i  title="Remove from Cart"
                className={iconClassName} 
                onClick={() => removeFromCart(item)}
                ref={ref} // used Custom hook for hover functionality
                /*onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}*/
            >
            </i>
            
            <img src={item.url} width="130px" alt="img" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}


export default CartItem