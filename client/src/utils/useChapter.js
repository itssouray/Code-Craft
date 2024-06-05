import { useEffect, useState } from "react";



const useChapter = (id)=>{
    const [chapterData,setChapterData] = useState([]);


    const fetchCourse = async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/api/courses/${id}`);
            const data = await response.json();
            setChapterData(data.chapters)
            // setTopics(data.chapters[0].topic)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
    }

useEffect(()=>{
  fetchCourse()
},[])

return [chapterData,setChapterData];
}

export default useChapter;



