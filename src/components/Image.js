import React, {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    //const [hovered,setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

/*
    function heartIcon(){
      if (img.isFavorite){
        <i onClick={() => toggleFavorite(img.numericCode)} className="ri-heart-fill favorite"></i>
      } else if (hovered) {
        <i onClick={() => toggleFavorite(img.numericCode)} className="ri-heart-line favorite"></i>
      }
    }*/
    
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" title="Remove as Favrite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" title="Set as Favrite"  onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    //const heartIcon = hovered && <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
    //const cartIcon = hovered && <i className="ri-add-circle-line cart"  onClick={() => addToCart(img)}></i>

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" title="Remove from Cart" onClick={() => removeFromCart(img)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" title="Add to Cart"  onClick={() => addToCart(img)}></i>
        }
        // if the item is already in the cart
        // else if the image is being hovered
    }
/*
    function cartIcon() {
        if (cartItems.some(item => item.id === img.id)) {
          return <i className="ri-shopping-cart-fill cart"></i>
          } else if(hovered) {
            return <i className="ri-add-circle-line cart"  onClick={() => addToCart(img)}></i>
        }
      }
*/
    //console.log(hovered)
    return (
        <div 
          className={`${className} image-container`}
          ref={ref} // used Custom hook for hover functionality
         /* onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}*/>
            <img key={img.id} src={img.url}  className="image-grid"/>
          {heartIcon()}
          {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
