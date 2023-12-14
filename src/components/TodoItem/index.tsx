import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useApiDeleteTodosMutation, useApiPatchTodosMutation } from "../../redux/api/todoApi"
import { Checkbox, Icon, IconWrapper, Label, ListItem, TodoLi, TodoUl } from "./styled"
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Toastfire } from "../../utils/SweetAlert";
import { TodoData } from "../../utils/types";
import { useEffect } from "react";
import { setTodofilter } from "../../redux/slice/todoSlice";


const TodoItem=()=>{
  const dispatch=useDispatch()
  const auth=useSelector((state:RootState)=>state.auth)
  const token=auth.token
  const todo=useSelector((state:RootState)=>state.todo)
  const todoData=todo.data
  const filterData=todo.filterData
  const tab=todo.tab
  useEffect(()=>{
    if (todoData) {
    dispatch(setTodofilter({ data: todoData,tab }));
  }
  },[todoData,tab])
  
  const [toggleTodo]=useApiPatchTodosMutation()
  const [deleteTodo]=useApiDeleteTodosMutation()
  const checkboxHandler=async(id:string)=>{
    try {
      const res=await toggleTodo({ id, token })
      if ('data' in res){
        Toastfire({icon:"success",title:`${res.data.message}`})
      }
    } catch (error) {
      Toastfire({icon:"error",title:`${error}`})
    }
  }
  const delTodoHandler=async(id:string)=>{
    try {
      const res=await deleteTodo({ id, token })
      if ('data' in res){
        Toastfire({icon:"success",title:`${res.data.message}`})
      }
    } catch (error) {
      Toastfire({icon:"error",title:`${error}`})
    }
  }
  
  return(
    <TodoUl>
      {filterData.map((item:TodoData)=>{
        const{id,status,content}=item
        return(
          <TodoLi className=" px-8 mb-4 text-black">
            <ListItem key={id}>
              <Label htmlFor={id} onClick={()=>checkboxHandler(id)}>
                <Checkbox type="checkbox" id={id} checked={status}/>
                <span className="context px-6" >{content}</span>
              </Label>
              <IconWrapper>
                <Icon>
                  <FaPencilAlt size={25}/>
                </Icon>
                <Icon>
                  <MdDeleteForever size={30} onClick={()=>delTodoHandler(id)}/>
                </Icon>
              </IconWrapper>  
            </ListItem>
          </TodoLi>
        )
      })}
    </TodoUl>
  )
}
export default TodoItem