import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    isLoggedIn : false,
    email : null,
    userName: null,
    userId: null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        SET_ACTIVE_USER:(state,action)=>{
             console.log(action.payload)
             const {email,userName,userID}=action.payload
             state.isLoggedIn=true;
             state.email= email
             state.userName=userName
             state.userId= userID
        },
        REMOVE_ACTIVE_USER(state,action){
            state.isLoggedIn=false;
            state.email= null;
            state.userName=null;
            state.userId= null;
        }
    }

});
export const {REMOVE_ACTIVE_USER, SET_ACTIVE_USER} =authSlice.actions;
 
export const selectIsLoggedIn=(state)=>state.auth.isLoggedIn;
export const selectEmail=(state)=>state.auth.email;
export const selectUserName=(state)=>state.auth.userName;
export const selectUserId=(state)=>state.auth.userID;

export default authSlice.reducer