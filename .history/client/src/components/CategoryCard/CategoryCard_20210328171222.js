import React from "react";

import "./style.css"

function CategoryCard(props) {
  return (
    <div className="col catCol" >
      {/* <div class="module-border-wrap"><div class="module"></div> */}
            <div className="card catBox">
            {/* <div class="gradient-box"> */}
                <div className="card-body text-center catCard">
                  {props.title}
                </div>
            </div>
            {/* </div> */}
        </div>
  );
}

export default CategoryCard; 