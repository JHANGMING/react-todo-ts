import { Label, LoginInput, SignupInput } from "./styled"

interface InputProps {
  type: string;
  placeholder?: string;
  id?:string;
  labelText?:string;
  // register: (name: string, options?: RegisterOptions) => void;
  // rules: RegisterOptions;
  // errors: {
  //   [key: string]: FieldError | undefined;
  // };
}


export const LogInput:React.FC<InputProps>=({type,placeholder,register,rules,errors})=>{
  return(
    <>
    {/* <input  className="w-[293px] mb-4  h-[52px] py-4 pl-5 rounded text-m text-black tracking-wider"   {...register(type,rules)}/> */}
    <LoginInput type={type} placeholder={placeholder} id={type}/>
    {/* {errors[type] && <p className=" text-list-fifth mb-5 self-start ml-15">{errors[type]?.message}</p>} */}
    </>
  )
}

export const SignInput:React.FC<InputProps>=({id,type,labelText,errors,register,rules})=>{
  return(
    <>
    <Label htmlFor={id}>{labelText}</Label>
    <SignupInput type={type} id={id} placeholder={id} />
    {/* {errors[id] && <span className="errorSignIn">{errors[id]?.message}</span>} */}
    {/* <SignupInput type={type} id={id} placeholder={id}  {...register(id,rules)}/> */}
    </>
  )
}