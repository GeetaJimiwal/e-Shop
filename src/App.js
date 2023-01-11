 import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import {Header, Footer} from "./components"
import {Home, Contact,Login,Register,Reset} from "./pages";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute';
import Cart from './pages/cart/Cart';
 

function App() {
   
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={< Register/>}></Route>
          <Route path='/reset' element={<Reset/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>

          <Route path='/admin/*' element={
             <AdminOnlyRoute>
               
               </AdminOnlyRoute>
              }/>
            

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
