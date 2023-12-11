import styled,{css} from "styled-components";
import { sixth } from "./commonStyled";

type ButtonTheme = "login" | "register";

const ButtonStyle = css`
  font-size: 21px;
  line-height: 37px;
  font-weight: 600;
  padding: 9px 0; 
  width: 175px; 
  border-radius: 30px;
  color: #FFFFFF;
  &:hover{
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const loginStyle=css`
    background-color: ${sixth};
    border: none;
    &:hover{
      opacity: 0.9;
    }
    `
const regStyle= css`
    background-color: transparent;
    border: 2px solid #FFF;
    `  

 
export const DefaultButton = styled.button<{theme:ButtonTheme}>`
  ${ButtonStyle}
  ${({theme})=>{
    if(theme ==="login")return loginStyle;
    if(theme==="register")return regStyle;
  }}
`;

