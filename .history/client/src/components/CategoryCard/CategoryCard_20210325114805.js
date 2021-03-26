import React from "react";

import "./style.css"

function CategoryCard(props) {
  return (
    <div className="col catCol" id="catGroup">
            <div className="card catBox">
                <div className="card-body text-center catCard">
                  {props.title}
                </div>
            </div>
        </div>
  );
}

export default CategoryCard; 