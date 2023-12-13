import { useDispatch } from "react-redux";
import { useApiCheckoutQuery } from "../../redux/api/authApi";

const ProtectedRoutes=()=>{
  const dispatch=useDispatch();
  const cookieToken=(document.cookie
  .split("; ")
  .find((row) => row.startsWith("token="))
  ?.split("=")[1]);
  const {data, isLoading, isSuccess, isError, refetch}=useApiCheckoutQuery(cookieToken)
  console.log(data);
  
  return(
    <>
    </>
  )
}
export default ProtectedRoutes;