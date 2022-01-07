import React from "react";

function coursecard(props) {
  const { data } = props;
  return (
    <div className="card">
      <img src="https://picsum.photos/10" alt="" />
      <br />
      <b className="cardheading">{data.text}</b>
      <p className="cardcontent">{data.text1}</p>
    </div>
  );
}

export default coursecard;
