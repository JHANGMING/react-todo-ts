import { MdAddBox } from "react-icons/md";
import { Icon, Input, Wrapper } from "./styled";
const TodoInput=()=>{
  
  return(
    <Wrapper>
      <Input type="text" placeholder="Please enter your task..." />
      <Icon>
        <MdAddBox size={50}/>
      </Icon>
    </Wrapper>
  )
}
export default TodoInput;