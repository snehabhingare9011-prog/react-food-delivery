
import ReactDOM from "react-dom/client";
import AppLayout from "./components/App.jsx";
import Body from "./components/Body.jsx";
import { AboutUs } from "./components/AboutUs.jsx";
import { ContactUS } from "./components/ContactUS.jsx";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import { Error } from "./components/Error.jsx";
import Pizza from "./components/Pizza.jsx";

import { lazy, Suspense } from "react";
import Appp from "./components/Appp.jsx";
const GRosery=lazy(()=>import('./components/GRosery.jsx'))


const appRouter=createBrowserRouter([
    {
       path:"/",
       element:<AppLayout/>,
      
       children:[
        {
            path:'/',
            element:<Body/>

        },
        {
        path:"/about",
        element:<AboutUs/>

      },
       {
        path:"/g",
        element:(<Suspense fallback={<h1>loading.........</h1>}><GRosery/></Suspense>)

      },
        {
        path:"/contact",
        element:<ContactUS/>
        },

        { 
            path:"/restaurant/:id",
            element:<Pizza></Pizza>,
        },

      

       ],
        errorElement:<Error/>,
    },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// root.render(<Appp/>)
