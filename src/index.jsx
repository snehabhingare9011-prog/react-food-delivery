
import ReactDOM from "react-dom/client";
import AppLayout from "./components/App.jsx";
import Body from "./components/Body.jsx";
import { AboutUs } from "./components/AboutUs.jsx";
import { ContactUS } from "./components/ContactUS.jsx";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import { Error } from "./components/Error.jsx";
const appRouter=createBrowserRouter([
    {
       path:"/",
       element:<AppLayout/>,
       errorElement:<Error/>,
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
        path:"/contact",
        element:<ContactUS/>
        }

       ]
    },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
