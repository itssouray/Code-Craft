import { useEffect, useState } from "react";



const useData = ()=>{
  const [apiData,setApiData] = useState([]);

  const apiCall = async ()=> {
    try {
      const response = await fetch("http://localhost:4000/api/language");
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}

useEffect(()=>{
  apiCall();
})

return [apiData,setApiData];
}

export default useData;



// const apiCall = async ()=> {
//     try {
//       const response = await fetch("http://localhost:4000/api/language");
//       const data = await response.json();
//       setApidata(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
// }
