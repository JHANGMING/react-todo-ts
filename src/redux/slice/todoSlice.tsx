import { createSlice } from "@reduxjs/toolkit";
import { TodoData, todoData } from "../../utils/types";


const initialState:todoData={
    tab:"",
    data:[],
    filterData:[]
  }


export const todoSlice=createSlice({
	name:"todo",
  initialState,
  reducers:{
    setTodoTab(state,action){
      return {...state,tab:action.payload}
    },
    setTodoData(state,action){
      console.log(action);
      
      return {...state,data:action.payload}
    },
    setTodofilter(state,action){
      const {data,tab}=action.payload
      const newdata=data.filter((item:TodoData)=>{
        if(tab==="todo"){
          return item.status===false
        }else if(tab==="done"){
          return item.status!==false
        }else{
          return item
        }
      })
      return {...state,filterData:newdata}
    },
  }
})

export const {setTodoTab,setTodoData,setTodofilter}=todoSlice.actions;
export default todoSlice.reducer; 