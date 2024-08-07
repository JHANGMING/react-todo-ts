import styled, { css } from 'styled-components';
import { sixth } from '../../utils/commonStyled';

type ButtonTheme = 'login' | 'register' | 'createAccount' | 'logIn';

const ButtonStyle = css`
  font-size: 21px;
  line-height: 37px;
  font-weight: 600;
  padding: 9px 0;
  border-radius: 30px;
  color: #ffffff;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const loginStyle = css`
  background-color: ${sixth};
  border: none;
  width: 175px;
  &:hover {
    opacity: 0.9;
  }
`;
const regStyle = css`
  background-color: transparent;
  border: 2px solid #fff;
  width: 175px;
  &:hover {
    background-color: rgb(255 255 255 / 0.1);
  }
`;
const createAccountStyle = css`
  background-color: ${sixth};
  border: none;
  &:hover {
    opacity: 0.9;
  }
  padding: 0 30px;
`;
const logInStyle = css`
  background-color: transparent;
  border: 2px solid #fff;
  width: 200px;
  &:hover {
    background-color: rgb(255 255 255 / 0.1);
  }
`;

export const DefaultButton = styled.button<{ theme: ButtonTheme }>`
  ${ButtonStyle}
  ${({ theme }) => {
    if (theme === 'login') return loginStyle;
    if (theme === 'register') return regStyle;
    if (theme === 'createAccount') return createAccountStyle;
    if (theme === 'logIn') return logInStyle;
  }}
`;
