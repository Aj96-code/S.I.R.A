import React from "react";

export default ({ className = "btn", children = null, type = "submit" }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
