import { NavigateFunction } from 'react-router-dom';

type ButtonConfig = {
  type: "submit" | "button";
  text: string;
  theme: "login" | "register"; 
  onClick?: () => void;
};

type DataConfig = {
  buttons: ButtonConfig[];
};
export const getData = (navigate: NavigateFunction):DataConfig => ({
  buttons: [
    {
      type: "submit",
      text: "Log In",
      theme: "login",
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