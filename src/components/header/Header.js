import React ,{useEffect, useState}from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Header.css";
import {auth} from "../../firebase/config";
import { signOut } from "firebase/auth";
import {FaShoppingCart, FaUserCircle} from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from "firebase/auth";
// import { HiOutlineMenuAlt3 } from "react-icons/hi"
 import {useDispatch} from "react-redux"
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout }  from '../hiddenLink/hiddenLink';
import AdminOnlyRoute, { AdminOnlyLink } from '../adminOnlyRoute/AdminOnlyRoute';
import {data} from '../../components/productPage/product-data'
 
const logo = (
  <div className="headedr">
    <Link to="/">
      <h2 className='e-txt'>
        e<span className='shop-txt'>Shop</span>.
      </h2>
    </Link>
 </div>
)
 

 
const Header = () => {
  
  // let carts = localStorage.getItem('dataKey') ? JSON.parse(localStorage.getItem('dataKey')) : []
  const [displayName,setUname] = useState("");
  const [showMenu, setShowMenu] = useState (false);
 
 const navigate = useNavigate()
 const [cart, setCart] = useState([]);

 useEffect(() => {
   const cart = JSON.parse(localStorage.getItem('dataKey'));
   if (cart) {
     setCart(cart);
   }
 }, []);

 const dipatch = useDispatch()

  // useEffect (() => {
  //   itemCount = (iData.filter(e => e.isAddedToCart)).length;
  // });
  useEffect (()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        if(user.displayName== null){
          const ul= user.email.substring(0,user.email.indexOf("@"));
          const uName = ul.charAt(0).toUpperCase()+ul.slice(1)
          setUname(uName)
         
        }
        else{
          setUname(user.displayName)

        }
        // const uid = user.uid;
         setUname(user.displayName)
        
         dipatch(SET_ACTIVE_USER({
          email:user.email,
          userName:user.displayName ? user.displayName: displayName,
          userId:user.uid,
         }))
         
        
      } else {
         setUname("");
         dipatch(REMOVE_ACTIVE_USER())
      }
    });
  },[dipatch,displayName])

  // const toggleMenu =()=>{
  //   setShowMenu(!showMenu)
  // };

  const hideMenu =()=>{
    setShowMenu(false)
  }

  const logoutUser =()=>{
    signOut(auth).then(() => {
    toast.success("Logout successfully..")
    navigate("/")

    }).catch((error) => {
      toast.error(error.message)
    
    });
  }



  return (
    <header>
      <div className='header-component'>
      <nav  > 
          <div className='header-left'>
              <div className='logo-container'>
                {logo}
              </div>
              <div onClick={hideMenu}className='home-container'>
             
              <li >
                <AdminOnlyLink>
                  <Link to="/admin/home">
                   <button className='admin-btn'>Admin</button>
                   </Link>
                  </AdminOnlyLink>
               </li>
                <ul >
                  <Link to="/">Home</Link>
                </ul>
                <ul>
                  <Link to="contact">Contact Us</Link>
                </ul>
              </div>
          </div>
       
          <div className='header-right'>
            <div className='links'>
             
                <NavLink to="/login">Login</NavLink>
               
              <a href="home">
                <FaUserCircle size={16}/>
                Hi {displayName}
              </a>
         
                  {/* <NavLink to="/order-history">My Orders
                  </NavLink> */}
                  <NavLink to="/" onClick={logoutUser}>LogOut</NavLink>
                   </div>
                      <div className='card'>
                <Link className='cart-link' to="/cart">
                  Cart
                  <div className='icon-tag'>
                    <FaShoppingCart size={20}/>
                    <p className='count'>{
                      cart.length
                    }</p>
                  </div>
                </Link>
  </div>
          </div>
  
      </nav>

      {/* <div className='menu-icon'>
        {cart}
        <HiOutlineMenuAlt3 onClick={toggleMenu} color='white'/>
      </div> */}
     </div>
     
    
    </header>
  )
}

export default Header
