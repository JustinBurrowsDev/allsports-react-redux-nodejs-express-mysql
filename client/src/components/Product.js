import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../hooks"
import "../styles/products.css"

console.log(getProducts)
export default props => {
  const { products } = useState([])

  return (
    <div className="productContainer">
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <p className="free">FREE SHIPPING</p>
            <img src={product.img.normal} />
            <Link className="productTitle" to={"/product/" + product.id}>
              {product.title}
            </Link>
            <hr></hr>
            <p>{product.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
