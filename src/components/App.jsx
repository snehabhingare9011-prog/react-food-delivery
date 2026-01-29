
import Header from "./Header";
import { Outlet } from "react-router-dom";

// const styleCard={
//   color:"red"
// }

const AppLayout = () => {


  return (
    // <div className="app" style={styleCard}>
      <div className="app">
         
      <Header></Header>
      <Outlet/>
    
   
      {/* <Body></Body> */}
      
      </div>
  );
};

export default AppLayout;
