import { useNavigate } from "react-router-dom";
import { SignInput } from "../Input";
import { Buttons, Container, Form, FormContainer } from "./styled";
import { getButtonsData, getInputsData } from "./data";
import { DefaultButton } from "../Button/styled";

const SignIn=()=>{
  const navigate=useNavigate()
  const buttonsData = getButtonsData(navigate);
  const inputsData=getInputsData()
  return(
    <Container>
      <h2>Register</h2>
      <Form>
        <FormContainer>
          {
            inputsData.Inputs.map((input)=>(
              <SignInput id={input.id} type={input.type} labelText={input.labelText}/>
            ))
          }
          {/* <SignInput id="email" type="email" labelText="Eamil"  />
          <SignInput id="email" type="email" labelText="Eamil"  />
          <SignInput id="email" type="email" labelText="Eamil"  /> */}
        </FormContainer>
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
  )
}
export default SignIn;

// <div className="register md:container text-white">
//         <div className="max-w-[550px] mx-auto flex flex-col items-center">
//           <h2 className="text-5xl self-start font-semibold mb-2">Register</h2>
//           <form className="signupForm w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
//             <div className="bg-black/[.3] rounded-lg px-5 md:pl-20 pt-10 pb-15 md:mb-10 mb-5">
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
//             </div>
//             <div className="flex justify-center">
//               <SigninBtn type="submit" btnText="Create Account" additionalClassName="bg-list-sixth"/>
//               <SigninBtn type="button" btnText="Log In" additionalClassName="md:w-[200px] w-[150px] hover:bg-white/[.10] border-2" onClick={()=>navigate("/")}/>
//             </div>
//           </form>
//         </div>
//     </div>