import useData from "../../utils/useData"
import { Typography,Button } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate } from "react-router-dom";



const AdminPanel = ()=>{
    const [apiData,setApiData] = useData([]);
    const navigate = useNavigate();
    
    const navigateTocourse = (id) => {
        navigate(`/update-page/${id}`)
    };

    return(
        <div className="admin-panel">
            <div className="sourse-container">
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
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    )
};


export default AdminPanel;


