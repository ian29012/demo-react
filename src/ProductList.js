import { useState, useEffect} from 'react'
import React from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom'
import Title from './Title/Title'
import QuantityBtn from './QuantityBtn/QuantityBtn.js'

export default function ProductList() {

    let [productList, setProductList] = useState([])

    useEffect(() => {

        fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
        .then(response => response.json())
        .then(data => setProductList(data))

    },[])

  return (
    <div>
        <Title title={"請選擇產品"} />
         <p>產品資料</p>
         <ul>
            { productList.map(product => 
                    <div className="boarder" key={product.id}>
                    <br />
                    <p>產品名稱：{product.name}</p>
                    <p>產品價格：{product.price}元</p>
                    <Link to={"/product/" + product.id}>
                    <img className="img" src={process.env.PUBLIC_URL+"/img/"+product.image}></img>
                    </Link>
                    <p>產品描述：{product.description}</p>
                    <QuantityBtn productInfo={product} />
                    </div>
            )
            }
         </ul>
    </div>
  )
}
