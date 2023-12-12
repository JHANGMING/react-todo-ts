import React from 'react';
import { NavigateFunction } from 'react-router-dom';

type ButtonConfig = {
  type: "submit" | "button";
  text: string;
  theme: "login" | "register"; 
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type DataConfig = {
  buttons: ButtonConfig[];
};

const loginHandler=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  e.preventDefault();
  console.log(e.target);
  
}

export const getButtonsData = (navigate: NavigateFunction):DataConfig => ({
  buttons: [
    {
      type: "submit",
      text: "Log In",
      theme: "login",
      onClick: loginHandler,
    },
    {
      type: "button",
      text: "Register",
      theme: "register",
      onClick: () => navigate("/sign")
    }
  ]
});


export const textData={
  title:"Organize it all with ToDoList",
  desc:"Simple tools, Efficient time, Better work."
}