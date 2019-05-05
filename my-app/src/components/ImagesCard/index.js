import React from "react";
import "./style.css";

function ImagesCard(props) {
  console.log("Image card...");
    return (
      <div className="card">
        <div onClick={() => props.handleImageClickEvent(props.id)} className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    );
  }
  
export default ImagesCard;