import React, { useEffect, useState } from 'react'
import Product from './Product'
import {data, data  as productsdata }from  "../../components/productPage/product-data"
import Search from './Search'
import Category from './Category'
// import Cart from "../../pages/cart/Cart"
import "./Product.css"


const allCategories =[
  "all",
  ...new Set(productsdata.map((products) =>products.category)
  ),
];
const ProductList = () => {
    const [product,setProduct] = useState(productsdata)
    const [search,setSearch] = useState("")
    const[filterProduct,setFilterProduct] = useState([])
    const[categories,setCategories]= useState(allCategories)
    

    const handlesearch =(e)=>{
      setSearch(e.target.value);
    };
    
    const allfilterProduct=(category)=>{
     if(category=== "all"){
      setProduct(productsdata)
      return;
     }
     const newProduct = productsdata.filter((products)=>
      products.category === category)
      setProduct(newProduct)
    }
    useEffect(() =>{
      setFilterProduct(
       product.filter((product)=> product.title.toLowerCase().includes(search.toLocaleLowerCase()))
      )
     },[search,product])
    
  return (
   <>
   <div className='search-category'>
    {/* <Cart></Cart> */}
      <Search inputvalue={search} OnInputChange={handlesearch} ></Search>
     <Category categories={categories} filterItem={allfilterProduct}></Category>
   </div>
    
     <h4 className='product-txt'>Select Item....</h4>
      <div className='product-container'>
        {filterProduct.length ===0 ?(
           <p> No Product Added</p>
        ):(
          filterProduct.map((product)=>{
          const {id,title,price, img,isAddedToCart} = product;
          return(
            <div key={id}>
            <Product
            product={product} title={title}
            img={img}
            price={price}
            isAddedToCart={isAddedToCart} data={data}></Product>
        </div>
             
          )
        }
        ))
        }

        
      </div>
    </>
  )
}

export default ProductList
