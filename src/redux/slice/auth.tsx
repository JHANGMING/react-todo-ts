import { createSlice } from "@reduxjs/toolkit";
import { authData } from "../../utils/types";

const initialState:authData={
    nickname:"",
    token:"",
  }


export const authSlice=createSlice({
	name:"auth",
  initialState,
  reducers:{
    
  }
})

export default authSlice.reducer; 