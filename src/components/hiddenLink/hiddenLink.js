import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

const ShowOnLogin=({childern})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if(isLoggedIn){
        return childern;
    } 
    return null;
};
export const ShowOnLogout=({childern})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if(!isLoggedIn){
        return childern; 
    }
    return null;
      

}

export default ShowOnLogin;


