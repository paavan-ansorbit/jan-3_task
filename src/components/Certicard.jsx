import React from 'react'

function certicard(props) {
    const { data } = props;
    return (
      <div className="certicard">
        <img src="https://picsum.photos/10" alt="" />
        <br />
        <b className="cardheading">{data.text}</b>
        <p className="cardcontent">{data.text1}</p>
        <p>{data.date}</p>
      </div>
    );
}

export default certicard
