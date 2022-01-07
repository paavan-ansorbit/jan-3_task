import React from "react";
import Coursecard from "./Coursecard.jsx";
import coursedata from "./coursedata.json";

function Courses() {
  return (
    <div className="maindiv">
      <h1>Start our one of 2500 high quality courses from the world!</h1>
      <div className="courseboxes">
        {coursedata.map((i) => (
          <Coursecard data={i} key={i.text} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
