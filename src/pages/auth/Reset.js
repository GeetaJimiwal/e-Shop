import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import ResetImg from "../../assest/reset.png"
import {auth} from "../../firebase/config"
import {sendPasswordResetEmail} from "firebase/auth"
import Loader from '../../components/loader/Loader';
const Reset = () => {
  const[email,setEmail] = useState("");
  const [isLoading,setIsLoading] =useState(false)
    const resetPassword =(e)=>{
      e.preventDefault()
      setIsLoading(true)
      sendPasswordResetEmail(auth, email)
      .then(() => {
         toast.success("check your email for a reset link")
        setIsLoading(false)
        })
      .catch((error) => {
        setIsLoading(false)
         toast.error(error.message)
        
      });

    }

  return (
    <>
    {isLoading  && <Loader/>}
    <section className='container'>
    <div className='images'>
       <img   width="400" src={ResetImg} alt="Login"></img> 
    </div>
        <div className='form'>
            <h2 className='h2text'>Reset</h2>
            <form onSubmit={resetPassword}>
                <input value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        name="email" 
                        className='name'
                        type ="text" 
                        placeholder='Email' required></input>
                <button type="submit" className='btn'>Reset Password  </button>
                <div className='login-register-text'>
                  <Link className='log' to="/login"> -Login</Link>
                  <Link className='reg' to="/register">-Register</Link>
                </div>
            </form>
        </div>
 
 </section> 
 </>
  )
}

export default Reset
