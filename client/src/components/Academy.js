import { Button, TextField, Typography } from "@mui/material";
import CppImg from "../asset/cpp-programming.webp";
import GradeIcon from "@mui/icons-material/Grade";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useData from "../utils/useData";


const Academy = () => {
  const [apiData,setApiData] = useData([]);
  const navigate = useNavigate();


  const navigateTocourse = (id) => {
    navigate(`/course/${id}`)
  };

  return (
    <div className="academy-container">
      <div className="academy-section">
        <div className="course-search">
          <TextField
            className="search-box"
            type="text"
            variant="outlined"
            placeholder="Search by course name..."
          ></TextField>
          <Button
            style={{ background: "#9d4edd" }}
            variant="contained"
            size="large"
          >
            search
          </Button>
        </div>
        <div className="course-section">
          <h2>Top Courses</h2>

          <div className="course-container">
            {apiData.map((item, index) => {
              return (
                <div key={index} className="course-box">
                  <div className="course-img">
                    <img src={item.imgUrl} alt="course-name"></img>
                  </div>
                  <div className="course-detail">
                    <Typography variant="h6" style={{ fontWeight: "600" }}>
                      {item.subjectName}
                    </Typography>
                    <div className="course-level">
                      <Typography
                        variant="p"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Beginner to Advance
                      </Typography>
                      <span className="ratings">
                        <Typography variant="p" style={{ fontSize: "13px" }}>
                          {item.ratings}
                        </Typography>
                        <GradeIcon
                          style={{ fontSize: "14px", color: "#f6ba1f" }}
                        ></GradeIcon>
                      </span>
                    </div>
                    <div className="explore">
                      <Button
                        onClick={()=>{navigateTocourse(item._id)}}
                        variant="contained"
                        style={{ width: "100%" }}
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
