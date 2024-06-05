import React from "react";

const Simmer = () => {
  return (
    <div className="simmer-container">
      <div className="simmer-nav-bar">
        <h3></h3>
        <div className="course-topic-list">
          <ul>
            {Array(10)
              .fill("")
              .map((index) => {
                return <li key={index} className="simmer-list"></li>;
              })}
          </ul>
        </div>
      </div>

      <div className="simmer-cotent">
        <h2 className="simmer-heading"></h2>
        <div className="simmer-right-bondy">
          {Array(10)
            .fill("")
            .map((index) => {
              return (
                <div key={index}>
                  <h3 className="simmer-subheading"></h3>
                  <div className="simmer-paragraph"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Simmer;
