import React from "react";
import "./style.css";

function Wrapper(props) {
  // alert("Wrapper");
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
