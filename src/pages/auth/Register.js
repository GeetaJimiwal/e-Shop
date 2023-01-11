import React  from 'react';
import {Link, useNavigate} from "react-router-dom";
import RegisterImg from "../../assest/register.png";
import { toast } from 'react-toastify';
import { useState } from "react";
 import {createUserWithEmailAndPassword} from "firebase/auth"
 import{auth} from "../../firebase/config"
import Loader from "../../components/loader/Loader"
 
const Register = () => {
  const register ={
    email:"",
    password:"",
    confirmPassword:""
  }

  const [user, setUser] = useState(register)
  const [isLoading,setIsLoading] =useState(false)

  const navigate= useNavigate()

 
  const handleChange =(e)=>{
    const {name,value }=e.target;
    setUser({...user,[name]:value});
   
  }

  const submitform =(e)=>{
    e.preventDefault()
    if(user.password === user.confirmPassword){
      toast.error("Password do not match");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      setIsLoading(false)
      toast.success("Registration Succesfull...")
      navigate("/login")
    })
    .catch((error) => {
      toast.error(error.message )
      setIsLoading(false)
      
    });
  }
  return (
    <>
     
      { isLoading  && <Loader/> }
    <section className='container'>
        <div className='form'>
            <h2 className='h2text'>Register</h2>
            <form onSubmit={submitform}>

                <input value={user.email}
                  onChange={handleChange} 
                  className='name'
                  type ="text"
                  placeholder='Email'
                  name="email" required>
                </input>
                <input value={user.password}
                  onChange={handleChange}
                  className='password'
                  type ="pssword"
                  placeholder='Password'
                  name="password" required>
                </input>

                <input value={user.confirmPassword}
                  onChange={handleChange} 
                  className='password'
                  type ="pssword"
                  placeholder='Confirm Password'
                  name="confirmPassword" required>

                </input>
                <button className='btn'>Register</button>
            </form>
            <span className='registre'>
              <p>Already an account?</p>  
                <Link className='reg' to="/login"><b>Login</b></Link>
            </span>
        </div>
            <div className='images'>
                <img   width="400" src={RegisterImg} alt="Register"></img> 
            </div>
     </section>
     
     </>
  )
}
export default Register
