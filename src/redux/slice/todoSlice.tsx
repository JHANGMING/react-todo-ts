import { createSlice } from "@reduxjs/toolkit";
import { todoData } from "../../utils/types";

const initialState:todoData={
    nickname:"",
    token:"",
  }


export const todoSlice=createSlice({
	name:"todo",
  initialState,
  reducers:{
    
  }
})

// export const {setUserData}=authSlice.actions;
export default todoSlice.reducer; 