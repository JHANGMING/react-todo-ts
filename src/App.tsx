
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";



function App() {
  

  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LogIn />}/>
        <Route path="sign" element={<SignIn />}/>
      </Route>
      {/* <Route element={<ProtectedRoutes />}>
        <Route path="todo" element={<About />}/>
      </Route>
      <Route path="*" element={<Notfund />}/> */}
    </Routes>
    </>

  )
}

export default App
