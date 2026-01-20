import { useEffect, useState } from "react"


const useOnlineStatus=()=>{
   const [status,setstatus]=useState("online");
    useEffect(()=>{
        window.addEventListener("online",()=>{
          setstatus("online");
        });
        window.addEventListener("offline",()=>{
          setstatus("offline");
        });

    },[]);
    return status;
}

export default useOnlineStatus;