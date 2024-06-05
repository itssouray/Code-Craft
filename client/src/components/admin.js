import { useState } from "react";

const Admin = () => {
  const [subjectName, setSubject] = useState("");
  const [imgUrl,setImage] = useState("");
  const [rating,SetRating] = useState(0);
  const [chapterName, setChapter] = useState("");
  const [TopicName, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [example, setExample] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/subjects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subjectName: subjectName,
        imgUrl:imgUrl,
        ratings:rating,
        chapters: [
          {
            chapterName,
            topic: [{ TopicName, description, example }],
          },
        ],
      }),
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
    <div className="admin-container">
      <form onSubmit={handleInput} className="input-form">
        <input
          type="string"
          value={subjectName}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          placeholder="enter subject name..."
        />
        <input
          type="string"
          value={imgUrl}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          placeholder="enter image url..."
        />
        <input
          type="string"
          value={chapterName}
          onChange={(e) => {
            setChapter(e.target.value);
          }}
          placeholder="enter topic name..."
        />
        <input
          type="string"
          value={TopicName}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
          placeholder="enter sub-topic name..."
        />
        <input
          type="number"
          value={rating}
          onChange={(e)=>{SetRating(e.target.value)}}
          placeholder="enter rating..."
          />
        <textarea
          type="string"
          rows="8"
          style={{outline:'none',fontSize:'16px',padding:'10px 15px'}}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="enter description...."
        />
        <textarea
          type="string"
          rows="6"
          style={{outline:'none',fontSize:'16px',padding:'10px 15px'}}

          onChange={(e) => {
            setExample(e.target.value);
          }}
          placeholder="examples..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
