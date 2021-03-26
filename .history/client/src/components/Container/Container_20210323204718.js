import React from "react";

function Container({children}) {
  return (
<div className="card m-2">
    <div className="card-body ">
        {children}
    </div>
</div>
  );
}

export default Container;