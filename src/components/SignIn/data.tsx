import React from "react";
import { NavigateFunction } from "react-router-dom";

type ButtonConfig = {
  type: "submit" | "button";
  text: string;
  theme: "createAccount" | "logIn"; 
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type buttonDataConfig = {
  buttons: ButtonConfig[];
};

type InputsConfig = {
  id:string;
  type: "email" | "text" |"password";
  labelText: string;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type InputsDataConfig = {
  Inputs: InputsConfig[];
};

const createAccountHandler=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  e.preventDefault()
  console.log('123');
}
export const getButtonsData = (navigate: NavigateFunction):buttonDataConfig => ({
  buttons: [
    {
      type: "submit",
      text: "Create Account",
      theme: "createAccount",
      onClick: createAccountHandler,
    },
    {
      type: "button",
      text: "Log In",
      theme: "logIn",
      onClick: () => navigate("/")
    }
  ]
});

export const getInputsData = ():InputsDataConfig => ({
  Inputs: [
    {
      id:"email",
      type: "email",
      labelText:"Eamil"
    },
    {
      id:"nickname",
      type: "text",
      labelText:"User name",
    },
    {
      id:"password",
      type: "password",
      labelText:"Password",
    },
    {
      id:"con-password",
      type: "password",
      labelText:"Confirm Password",
    }
  ]
});

//               <SignInput id="email" type="email" labelText="Eamil" errors={errors} register={register} rules={{
//                 required: 'Email 為必填',
//                 pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: 'Email 格式不正確',
//               },
//               }}/>
//               <SignInput id="nickname" type="text" labelText="User name" errors={errors} register={register} rules={{
//                 required: {
//                   value:true,
//                   message: '請輸入您的小名!'
//                 }
//               }}/>
//               <SignInput id="password" type="password" labelText="Password" errors={errors} register={register} rules={{
//                 required: {
//                   value: true,
//                   message: '請輸入密碼!'
//                 },
//                 minLength: {
//                     value: 6,
//                     message: "密碼長度至少6位字元"
//                 }
//               }}/>
//               <SignInput id="con-password" type="password" labelText="Confirm Password" errors={errors} register={register} rules={{
//                 required: {
//                   value: true,
//                   message: '請輸入密碼!'
//                 },
//                 minLength: {
//                     value: 6,
//                     message: "密碼長度至少6位字元"
//                 },validate: (val) => {
//                   if (watch('password') !== val) {
//                     return "密碼沒有一致喔！！";
//                   }
//                 }
//               }}/>
