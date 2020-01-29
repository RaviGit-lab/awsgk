
import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const imageref = ref.current
        imageref.addEventListener("mouseenter", enter)
        imageref.addEventListener("mouseleave", leave)
        
        return () => {    
            imageref.removeEventListener("mouseenter", enter)
            imageref.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [hovered, ref]
}

export default useHover