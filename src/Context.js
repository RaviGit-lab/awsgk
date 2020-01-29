import React, {useState, useEffect} from "react"
import Imagesdata from "./ImagesData.json"
const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [localPhotos, setLocalPhotos] = useState([])
    console.log(Imagesdata)
    
   //setLocalPhotos(Imagesdata)
/*
    useEffect(() => {
       setLocalPhotos(Imagesdata)
    }, [])
*/
    
    //const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    //const url = "./Images.json"
       
    useEffect(() => {
        setLocalPhotos(Imagesdata)
        setAllPhotos(Imagesdata)

       /* fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data)) */

    }, [])
 

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(img){

      // setCartItems(prevItems => prevItems.filter(item => item.id !== img.id))

      const updatedCart = cartItems.filter((item) => {
          return item.id !== img.id 
      })

      setCartItems(updatedCart)

    }

function emptyCart(){
  setCartItems([])
}

   // console.log(cartItems)
   console.log("allPhotos:", allPhotos)
   console.log("localPhotos:", localPhotos)
    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}