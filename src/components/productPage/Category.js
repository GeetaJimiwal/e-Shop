import React from 'react'
import "./Category.css"
 

const capitalize =(word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
const Category = ({categories,filterItem}) => {

  return (
    <div className='category-div'>
      {categories.map((product,index)=>{
        return(
          <button className='category-btn' 
           type='button'
          key={index} onClick={()=>filterItem(product)}>{capitalize(product)}</button>
        )
      })}
       
  
        
    
    </div>
  )
}

export default Category
