import React,{useState, useEffect} from 'react'
import {useParams, Link} from "react-router-dom"
import Title from './Title/Title'
import QuantityBtn from './QuantityBtn/QuantityBtn.js'

function ProductDetail() {

    let param = useParams()

    let [productDetail, setproductDetail] = useState(null)

    useEffect(() => {

        fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
        .then(response => response.json())
        .then(data => {
          let productInfo = data.find((element) => {
            return element.id === parseInt(param.id)
          })
          setproductDetail(productInfo)
        })
    },[])

  return (
    <div>
      { productDetail && 
      <div>
        <Title title={productDetail.name+'產品資料'} />
        <p>名稱 ： {productDetail.name} </p>
        <img className="img" src={process.env.PUBLIC_URL + "/img/" + productDetail.image} alt="" /><br/>
        <p>售價 ： ${productDetail.price} </p>
        <QuantityBtn productInfo={productDetail}/>
        <Link to={"/"}>回到產品列表</Link>
      </div>
      }
    </div>
  )
}

export default ProductDetail