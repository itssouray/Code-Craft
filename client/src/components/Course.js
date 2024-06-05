import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Simmer from "./Simmer";
import Spinner from "./Spinner";

const Course = () => {
  const { id } = useParams();
  const [chapterList, setChapterList] = useState(null);
  const [courseName, setCoursename] = useState("");
  // const [chapterContent, setChapterContent] = useState({});
  const [chapterIndex, setChapterIndex] = useState(0);

  const fetchCourse = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/courses/${id}`);
      const data = await response.json();
      setCoursename(data.subjectName);
      setChapterList(data.chapters);
      // setChapterContent(data.chapters[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChapterIndex = useCallback((index) => {
    setChapterIndex(index);
  });

  setTimeout(()=>{
      fetchCourse();
  },2000)
  

  return chapterList == null ? (
    <Spinner />
  ) : (
    <div className="course-container">
      <div className="course-topic-nav">
        <h3>{courseName}</h3>
        <div className="course-topic-list">
          <ul>
            {chapterList.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    handleChapterIndex(index);
                  }}
                >
                  {item.chapterName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="course-body">
        <div className="course-content">
          <h2>{chapterList[chapterIndex].chapterName}</h2>
          {chapterList[chapterIndex].topic.map((item, index) => {
            return (
              <div key={index} className="topics">
                <h3>{item.TopicName}</h3>
                <pre style={{ whiteSpace: "pre-wrap" }}>{item.description}</pre>
                {
                  item.example!=''?
                  <div className="example-container" style={{padding:item.example?'10px':'0px'}}>
                    <pre style={{ whiteSpace: "pre-wrap"}}>
                      {item.example}
                    </pre>
                  </div>
                  :""
                }
                {
                  item.imgExample?
                  <div className="image-example">
                    <img src={item.imgExample} alt="image-link"></img>
                  </div>
                  :""
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
