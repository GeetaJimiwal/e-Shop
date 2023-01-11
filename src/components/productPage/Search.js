import React from 'react'
import "./Search.css";
const Search = ({inputvalue,OnInputChange} ) => {
  return (
    <div className='input-data'>
      <input  
      onChange={OnInputChange}
      value={inputvalue}
      className='search-input' type="text" placeholder='Search...'></input>
    </div>
  )
}

export default Search
