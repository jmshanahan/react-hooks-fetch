import React from "react";
const Postitem = ({ title, description }) => {
  return (
    <li>
      <h2>{title}</h2>
      {description}
    </li>
  );
};

export default Postitem;
