import React from 'react'
 import "./Product.css"
//  import {data} from './product-data'
const Product = ( {title,img,price,product} ) => {

  const handleAddToCart = (product) => {
    // const dataIndex = data.findIndex(e => e.id == productId)
    // data[dataIndex].isAddedToCart = true; 

    let cart = localStorage.getItem('dataKey') ? JSON.parse(localStorage.getItem('dataKey')) : []
    if(cart.length > 0 && cart.findIndex(e => e.id == product.id) != -1)
    return
    product.qty = 1
    cart.push(product);
    localStorage.setItem('dataKey', JSON.stringify(cart));
    alert("Item Added On Cart")
    // }
  }
  return (
    <div className='all-product-container'>
           
        <form  className='product2-container' >
           <img className='imgcontain'src={img} ></img>
            <p className='name-title'>Name: {title} </p>
            <p className='name-title'>Rs.{price} </p>
            <button className='add-to-cart' type='button' onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </form>
    
    </div>
  )
}

export default Product
