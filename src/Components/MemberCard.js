import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "./MemberCard.css";

const MemberCard = ({ item }) => {
  const iconClassName = item.isChecked ? "icon-green" : "icon-gray";
  const textClassName = item.isChecked ? "icon-black" : "icon-gray";

  return (
    <div className="Card-container">
      <div className={`Icon-and-Name-Container ${textClassName}`}>
        {item.isChecked}
        <PersonIcon sx={{ height: "auto" }} className="" />
        <p className="Name">{item.name}</p>
      </div>
      {item.isChecked ? (
        <CheckCircleOutlineIcon
          className={`Icon-and-Name-Container ${iconClassName}`}
        />
      ) : (
        <RadioButtonUncheckedIcon
          className={`Icon-and-Name-Container ${iconClassName}`}
        />
      )}
    </div>
  );
};

export default MemberCard;
