import { LoginInput } from "./styled"

interface LogInputProps {
  type: string;
  placeholder: string;
  // register: (name: string, options?: RegisterOptions) => void;
  // rules: RegisterOptions;
  // errors: {
  //   [key: string]: FieldError | undefined;
  // };
}
export const LogInput:React.FC<LogInputProps>=({type,placeholder,register,rules,errors})=>{
  return(
    <>
    {/* <input  className="w-[293px] mb-4  h-[52px] py-4 pl-5 rounded text-m text-black tracking-wider"   {...register(type,rules)}/> */}
    <LoginInput type={type} placeholder={placeholder} id={type}/>
    {/* {errors[type] && <p className=" text-list-fifth mb-5 self-start ml-15">{errors[type]?.message}</p>} */}
    </>
  )
}