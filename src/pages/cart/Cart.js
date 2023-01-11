import React, { useState,useEffect } from 'react';
import './Cart.css'
// import {data} from '../../components/productPage/product-data'
import { Link} from 'react-router-dom'
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('dataKey'));
    if (cart) {
      setCart(cart);
    }
  }, []);
  const addItem =(product)=>{
    const exist = cart.find((x)=>x.id === product.id);
    // let abc = {...count}
    if(exist){
      setCart(cart.map((x)=>
      x.id === product.id ? {...exist, qty: exist.qty +1}:x
      )
      
      ); 
     
    }
    else{
      setCart([...cart,{...product,qty:1}])
    }
  };
  const subItem =(product)=>{
    const exist = cart.find((x)=>x.id ===  product.id);
    if(exist.qty ===1){
      setCart (cart.filter((x)=>x.id !== product.id));
    }
    else{
      setCart(cart.map((x)=>
      x.id === product.id ? {...exist, qty: exist.qty -1}:x
      )
      );
    }
  }

  // useEffect(() => {
  //   cart.map((cartdata)=>{
  //     if(cartdata.isAddedToCart){
  //       localStorage.setItem('dataKey', JSON.stringify(cart));
  //     }
  //   })
  // }, [cart]);
 
  // useEffect(() => {
  //   const carts = JSON.parse(localStorage.getItem('dataKey'));
  //   if (carts) {
  //     setCart(carts);
  //   }
  // }, []);
  

  const removeButton=(id)=>{
    const deletItem = cart.filter((product)=>product.id !=id)
    setCart(deletItem)
    
  }
  
 
  const initialValue = 0;
  const total = cart.reduce((accumulator,current) => accumulator + current.price * current.qty, initialValue)

  return (
    <div>
      <h3>Cart Item..</h3>
      <div className='carts-component'>
        <div className='cart-items'>
        { cart.length ===0 &&
                <div className='cart-empty-txt'>
                  <h3>Cart Is Empty</h3>
                </div>}
                <div><Link to="/#products">Continue Shopping</Link></div>
          {
          cart.map((item)=> {
            
            // if(item.isAddedToCart){
              
              return(
                <div className='second-cart'>
                <div className='cart-page' key={item.id}>
                  <img className='img-item' src={item.img} alt={item.title}></img>
                  <p className='title-name'>{item.title}</p>
                
                  <div className='cart-btn'>
                    <button onClick={()=>subItem(item)} className='cart-item-minus'>-</button>
                    <p className='qty-count'>{item.qty}</p>
                      <button onClick={()=>addItem(item)} className='cart-item-add'>+</button>
                  </div>
                  <p className='item-price'>Price: {(item.price * item.qty).toFixed(2)} </p>
                
                  <button type='btn' onClick={()=>removeButton(item.id)} className='remove-btn'>Remove</button>
                </div>
                </div>
              )
            // }
          })
         }
       </div>
        <div className="total">
          <p className='price-detail'>Price Details</p>
          <hr></hr>
            {/* <p>Cart Items {item.qty}</p> */}
            <div>
              <p className='total-txt'>Total Amount:  <span className='total-amount'>${total}</span>  </p>
            </div>
        </div>
      </div>
   </div>
 
  )
}

export default Cart
