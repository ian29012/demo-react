import { useContext, useState } from "react"
import { CartContext } from "../CartContext.js"

export default function QuantityBtn({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext)

      // 檢查購物車內有沒有該產品
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })

    // 如檢查購物車內有該產品會返回索引位置； 如沒有返回 -1
    let [numInCart,setNumInCart] = useState(
        (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
    )

    const handleAdd = ()=>{

        if(productIndexInCart===-1)
        {
            // 如購物車中沒有該產品，會在cartItems array 中加入新element (object)
            setCartItems(
                [{
                    id : productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                },
                ...cartItems]
            )
        }
        else
        {
            // 如購物車中有該產品，只會為 quantity 加 1
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart+1)
    }

    const handleSubtract = ()=>{

        if(cartItems[productIndexInCart].quantity===1)
        {
            // 如購物車中只有一件的話即remove object
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }
        else
        {
            //只減個quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart-1)
    }

    return (
        <div>
            {
                (numInCart === 0) ?
                <div onClick={handleAdd}>加入購物車</div> :
                <div>
                    <span onClick={handleSubtract}>-</span>
                    {numInCart}件
                    <span onClick={handleAdd}>+</span>
                </div>
            }
        </div>
    )
}