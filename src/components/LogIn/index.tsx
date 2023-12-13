
import { useNavigate } from "react-router-dom";
import { LogInput } from "../Input";
import { DefaultButton } from "../Button/styled";
import { Buttons, Container, Form, Wrapper } from "./styled"
import { getButtonsData, getInputsData, textData } from "./data";
import { useForm } from "react-hook-form";

const LogIn=()=>{
  const navigate=useNavigate()
  const buttonsData = getButtonsData(navigate);
  const inputsData=getInputsData()
  const {title,desc}=textData;
  const {register,handleSubmit,formState:{errors}}=useForm();
  const onSubmit=(data)=>{  //可以自訂義
    console.log(data)
  }
  return(
    <Wrapper>
      <Container>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {inputsData.Inputs.map((input)=>      
            {
            const {id,type,labelText,rules}=input
              return (
              <LogInput key={id} id={id} type={type} labelText={labelText} errors={errors} register={register} rules={rules}/>
            )})
          }
          {/* <LogInput type="email"  placeholder="Email"/>
          <LogInput type="password" placeholder="Password"/> */}
          <Buttons>
            {buttonsData.buttons.map((button) => (
              <DefaultButton
                key={button.text}
                type={button.type}
                theme={button.theme}
                onClick={button.onClick}
              >
                {button.text}
              </DefaultButton>
            ))}
          </Buttons>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default LogIn;