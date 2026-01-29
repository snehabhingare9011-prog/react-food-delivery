import React, { useEffect, useState } from 'react'

const Appp = () => {
    const[count,setcount]=useState(0);

    useEffect(()=>{
        console.log("");
     setcount(count+1);
     setcount(count+2);
     setcount("njnjn");
    },[]);
   

  return (
    <div>
      {count}
    </div>
  )
}

export default Appp