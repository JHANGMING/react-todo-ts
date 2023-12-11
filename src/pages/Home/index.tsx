import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import { Container, Wrapper, WrapperBlur } from "./styled";

const Home=()=>{
  return(
    <Wrapper>
      <WrapperBlur>
        <Container>
          <Nav/>
          <Outlet/>
        </Container>
      </WrapperBlur>
      {/* <section className="landing-pg h-screen ">
         <div className="landing-color h-screen ">
           <div className="container">
             <h1 className="md:pl-30"><button className="text-list-fifth text-5xl font-extrabold font-sans">TDL<span className="text-list-seventh text-7xl">.</span></button></h1>
             <Outlet />
           </div>
         </div>
       </section> */}
    </Wrapper>
  )
}

export default Home;