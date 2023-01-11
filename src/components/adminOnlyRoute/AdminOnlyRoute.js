import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/slice/authSlice'
 
const AdminOnlyRoute = ({ childern }) => {
    const userEmail = useSelector(selectEmail);
   if(userEmail=== "geeta.borajimiwal@xcdify.com"){
    return childern;
   }
   return (
    <section style={{height:"80vh"}}>
        <div className='container'>
            <h2>Permission Denied.</h2>
            <p>This page can only view by an Admin user.</p>
            <br/>
            <button className='btn'>& arr; Back To Home</button>
        </div>
    </section>
   );
}

 export const AdminOnlyLink = ({childern}) => {
    const userEmail = useSelector(selectEmail)
   if(userEmail=== "geeta.borajimiwal@xcdify.com"){
    return childern;
   }
   return null;
}

export default AdminOnlyRoute
