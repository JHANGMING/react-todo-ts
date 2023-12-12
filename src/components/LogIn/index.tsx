
import { useNavigate } from "react-router-dom";
import { LogInput } from "../Input";
import { DefaultButton } from "../Button/styled";
import { Buttons, Container, Form, Wrapper } from "./styled"
import { getButtonsData, textData } from "./data";

const LogIn=()=>{
  const navigate=useNavigate()
  const buttonsData = getButtonsData(navigate);
  const {title,desc}=textData;
  
  return(
    <Wrapper>
      <Container>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Form>
          <LogInput type="email"  placeholder="Email"/>
          <LogInput type="password" placeholder="Password"/>
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