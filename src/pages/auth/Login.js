import React, {useState}from 'react'
import "./Login.css";
// import Card from "../../components/card/Card"
import loginImg from "../../assest/login.jpg"
import { FaGoogle } from 'react-icons/fa';
import {Link, useNavigate} from "react-router-dom"
 import {auth} from "../../firebase/config";
 import Loader from '../../components/loader/Loader';
 import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
 
 
const Login = () => {

    const loginUser={
        email:"",
        password:"",
    }

    const [user,setUser] = useState(loginUser);
    const [isLoading,setIsLoading] =useState(false)
    const navigate = useNavigate()
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setIsLoading(true);

        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
        //   const user = userCredential.user;
          setIsLoading(false);
          toast.success("Login Sucessfully..");
          navigate("/");
        })
        .catch((error) => {
         setIsLoading(false)
         toast.error(error.message)
        });
    }

    const provider = new GoogleAuthProvider();
    const signInWithGoogle =()=>{
        signInWithPopup(auth, provider)
            .then((result) => {
            // const user = result.user;
            toast.success("Login Successfully")
            navigate("/")
            }).catch((error) => {
            toast.error(error.message)
            });
    }
  return (
    <>
    {isLoading && <Loader></Loader>}
     <section className='container'>
        <div className='images'>
           <img   width="400" src={loginImg} alt="Login"></img> 
        </div>
        {/* <Card> */}
            <div className='form'>
                <h2 className='h2text'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input value={user.email} 
                        onChange={handleChange} 
                        name="email" 
                        className='name'
                        type ="text" 
                        placeholder='Email'
                        required>
                    </input>
                    <input value={user.password} 
                      onChange={handleChange} 
                      name="password" 
                      className='password'
                      type ="pssword" 
                      placeholder='Password' 
                      required>
                    </input>
                    <button className='btn'>Login</button>
                    <div className='links'>
                        <Link className='fgpassord' to="/reset">Forget Password
                        </Link>
                    </div>
                    <p className='or'>-- or --</p>
                </form>
                <button className='login-google' onClick={signInWithGoogle}>
                    <FaGoogle color='#fff'></FaGoogle> Login width Google</button>
                <span className='registre'>
                    <p>Don't have an account?</p>
                    <Link className='reg' to="/register"><b>Register</b></Link>
                </span>
            </div>
        {/* </Card> */}
     </section>
     </>
  )
}

export default Login
