import styled from "styled-components";

export const TodoUl=styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TodoLi=styled.li`
  padding: 0 24px;
  margin-bottom: 12px;
  color: black;
`;

export const ListItem=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:2px solid rgba(82, 81, 81,.3);
  width: 100%;
  padding-bottom: 12px;
`;

export const Label=styled.label`
  width: 20px;
  display: flex;
  font-size: 21px;
  line-height: 37px;
  flex: 1 1 0%;
  gap:6px;
  cursor: pointer;
`;

export const Checkbox=styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  top: 0px;
  left: 0;
  width: 50px;
  height: 50px;
  border: 10px solid #462209;
  /* &::before{
    content: "\2713";
    position: absolute;
    top: 0;
    left: 0;
    font-size: 30px;
    width: 50px;
    height: 50px;
    color: #462209;
    background:rgba(255,255,255,.95);
    border-bottom:1px solid #462209;
    border-right:1px solid #462209;
    text-align: center;
    line-height: 30px;
    display: none;
  }
  &:checked::before {
    display: block;
  } */
`;

export const IconWrapper=styled.div`
  display: flex;
  align-items: center;
  gap:6px;
`;

export const Icon=styled.div`
  color: rgba(70,34,9,.8);
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
`;
