import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'
import './CheckOut.css'
import QuantityBtn from '../QuantityBtn/QuantityBtn.js'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

function CheckOut() {

  let { cartItems } = useContext(CartContext)

  let cartEmpty = cartItems.length <= 0 ? true : false

  let grandTotle = cartItems.reduce((total, product)=>{
    return total += product.price*product.quantity
  }, 0)

  let freeshipping = 99

  return (
    <div>
       <Title title={'你的購物車'} />

       { 
        cartEmpty && 
         <div>
              購物車現在沒有商品<br/>
              <Link to="/">去產品頁看看吧</Link>
         </div>
       }
       
       { !cartEmpty && 
        <div id='carSection'>

          {cartItems.map((product) => (

          <div key={product.id}>
             {product.name}<br/>
             <img className="img" src={process.env.PUBLIC_URL + "/img/" + product.image} alt="" /><br/>
             價錢：${product.price}<br/>
             購買數量：<QuantityBtn productInfo={product}/>
             <br/>
          </div>
            
          ))}


          <div id='checkOutSection'>

              <div>全部貨品總共</div>
              <div>{grandTotle}元</div>
              <br />

              {
                grandTotle >= freeshipping ?
                <div>我們免費送貨</div> :
                <div>
                <div>滿$99可獲免費送貨</div>
                <div>再買滿{freeshipping - grandTotle}即可免費送貨</div>
                </div>
              }
          </div>
        </div>
               
        }

    </div>
  )
}

export default CheckOut