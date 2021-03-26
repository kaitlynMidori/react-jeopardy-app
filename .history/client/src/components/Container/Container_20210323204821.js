import React from "react";

function Container({children}) {
  return (
<div className="card">
    <div className="card-body mb-2">
        {children}
    </div>
</div>
  );
}

export default Container;