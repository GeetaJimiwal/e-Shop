import React, { useState } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import { sliderData } from './slider-data'


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState()
  return (
    <div className='slider'>
        <AiOutlineArrowLeft className='arrow -prev'></AiOutlineArrowLeft>
        <AiOutlineArrowRight className='arrow-next'></AiOutlineArrowRight>
        {sliderData.map((slide,index)=>{
            const { image,heading,desc}= slide
            return(

                <div key={index} className= {index== currentSlide ?"slide current": "slide"}>
                  {index=== currentSlide && (
                    <>
                    <img src={image} alt="slide"></img>
                    <div className='content'>
                        <h2>{heading}</h2>
                        <p>{desc}</p>
                        <hr></hr>
                        <a className='btn-blue' href='#products'>
                            Shop Now
                        </a>
                    </div>
                    </>
                  )}


                </div>
            )
        })}
      
    </div>
  )
}

export default Slider
