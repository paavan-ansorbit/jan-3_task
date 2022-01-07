import React from "react";
import Certicard from "./Certicard";
import certidata from "./certidata.json";
function Certificates() {
  
  return (
    <div>
      <h1>Popular Certificates</h1>
      <div className="certiboxes">
          {certidata.map((i) => (
            <Certicard data={i} key={i.text} />
          ))}
      </div>
    </div>
  );
}

export default Certificates;
