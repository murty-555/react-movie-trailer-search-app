import React from "react";
import { FaCaretDown } from "react-icons/fa";
import "../styles/Dropdown.css";

const Dropdown = ({label, list}) => {

  const dropdownListRender = [];
  
  list.forEach((option, i) => {
    dropdownListRender.push(
      <div key={option + "_" + i} className="dropdown-item">
        <span className="ellipsis"> {option} </span>
      </div>
    )
  })
 

  return (
    <div className="dropdown">
      <button className="btn dropdown-btn" type="button">
        <span className="dropdown-label ellipsis">{label}</span>
        <FaCaretDown className="dropdown-icon" />
      </button>
      <div className="dropdown-menu">{dropdownListRender}</div>
    </div>
  );
};

export default Dropdown;
