import { useParams } from "react-router-dom";
import useChapter from "../../utils/useChapter";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const UpdatePage = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [example, setExample] = useState("");
  const [imgExample, setImgExample] = useState("");
  const { id } = useParams();
  const [Chapterindex, setIndex] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [chapterData, setChapterData] = useChapter(id);
  const [chapterName, setChaptername] = useState("");
  const [clickedAction, setClickedButton] = useState("");

  const handleIndex = (index, action) => {
    setIsClicked(true);
    let actionName = action == "topic" ? "topic" : "chapter";
    if (action == "topic") {
      setIndex(index);
    }
    setClickedButton(actionName);
    console.log(action);
    console.log(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const languageId = id;
    const chapterIndex = Chapterindex;

    const newTopicData = {
      TopicName: topic,
      description: description,
      example: example,
      imgExample: imgExample,
    };

    console.log("hello");
    console.log(newTopicData);

    fetch(
      `http://localhost:4000/languages/${languageId}/chapters/${chapterIndex}/topics`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTopicData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const addChapter = (e) => {
    e.preventDefault();
    const languageId = id;

    const newChapterData = {
      chapterName: chapterName,
      // topic:[]
    };

    fetch(`http://localhost:4000/languages/${languageId}/chapters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChapterData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="update-page">
      <div className="course-topic-nav">
        <h3>Programming in c++.</h3>
        <div className="course-topic-list">
          <ul>
            {chapterData.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    handleIndex(index, "topic");
                  }}
                  key={index}
                >
                  {item.chapterName}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="add-chapters">
          <Button
            variant="contained"
            style={{
              width: "100%",
              textTransform: "none",
              display: "flex",
              gap: "20px",
            }}
            onClick={() => {
              handleIndex(null, "chapter");
            }}
          >
            New Chapters
          </Button>
        </div>
      </div>

      <div className="update-body-container">
        {isClicked == true ? (
          <div className="update-field">
            {clickedAction == "chapter" ? (
              <form onSubmit={addChapter} className="input-form">
                <h4>Add new Chapter</h4>
                <input
                  type="text"
                  placeholder="Enter chapter name..."
                  onChange={(e) => {
                    setChaptername(e.target.value);
                  }}
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="input-form">
                <h4>Add new Topic</h4>

                <input
                  type="text"
                  placeholder="Enter topic name..."
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                />
                <textarea
                  rows="8"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Enter description...."
                />
                <textarea
                  rows="8"
                  onChange={(e) => {
                    setExample(e.target.value);
                  }}
                  placeholder="Enter examples...."
                />
                <input
                  type="text"
                  placeholder="Enter Image url...."
                  value={imgExample}
                  onChange={(e) => {
                    setImgExample(e.target.value);
                  }}
                />

                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        ) : (
          <h1 className="update-chapter-heading">
            Select chapter to update or add new chapter
          </h1>
        )}
      </div>
    </div>
  );
};

export default UpdatePage;
