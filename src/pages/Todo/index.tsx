import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Container, Wrapper } from "./styled";
import TodoNav from "../../components/TodoNav";


const Todo=()=>{
  const userTodo=useSelector((state:RootState)=>state.auth)
  console.log(userTodo);
  
  return(
    <Wrapper>
      <Container>
        <TodoNav/>
      </Container>
    </Wrapper>
  )
}

export default Todo;