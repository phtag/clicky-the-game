import React from "react";
import "./style.css";

function Overview(props) {
  alert("Overview");
  return <div className="overview"><h2>Click on an image to earn points, but don't click on any more than once!</h2>
  </div>;
  // return <div className="wrapper">{props.children}</div>;
}

export default Overview;