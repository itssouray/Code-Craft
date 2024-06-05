import React from "react";
import Avatar from "../../asset/mob.jpg";
import { Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import useData from "../../utils/useData";
import { useNavigate } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";

const Profile = () => {
  const [apiData, setApiData] = useData([]);
  const navigate = useNavigate();

  const navigateTocourse = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <div className="profile-pic">
          <img src={Avatar} alt="avatar"></img>
        </div>
        <div className="user-info">
          <Typography variant="h5">mob_100</Typography>
          <Typography variant="subtitle1">itssouravgupta</Typography>
          <div className="about-section">
            <Typography variant="subtitle1">
              Computer Science student currently pursuing my degree in btech
            </Typography>
          </div>
          <div className="location-education">
            <div className="location">
              <LocationOnIcon />
              India
            </div>
            <div className="education">
              <SchoolIcon />
              Gyan Bharti residential complex
            </div>
          </div>
          <div className="social-media">
            <GitHubIcon />
            itssouray
          </div>
        </div>
      </div>

      <div className="course-progress">
        <Typography variant="h5" style={{ fontWeight: "510" }}>
          <div className="course-enrolled-container"></div>
          Progress
        </Typography>
        <div className="progress-status">
          <div className="subject-bar">
            <Typography
              variant="p"
              style={{ fontWeight: "510", fontSize: "20px" }}
            >
              C++
            </Typography>
            <div className="progress-bar">
              <div className="progress-bar-inner"></div>
            </div>
          </div>

          <div className="subject-bar">
            <Typography
              variant="p"
              style={{ fontWeight: "510", fontSize: "20px" }}
            >
              Java
            </Typography>
            <div className="progress-bar">
              <div className="progress-bar-inner two"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="course-enrolled">
        <Typography variant="h5" style={{ fontWeight: "510" }}>
          Course Enrolled
        </Typography>
        <div className="course-enrolled-container">
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
                      onClick={() => {
                        navigateTocourse(item._id);
                      }}
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
  );
};

export default Profile;
