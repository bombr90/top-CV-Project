import React from "react";

const PrevExperienceWidget = (props) => {
  return (
    <div className="prevexperience">
      <div className="italic bold">
        {`${props.experience.start || "Start"} to\n${
          props.experience.end || "End"
        }`}
      </div>
      <div>
        <div className="pv-subheader">
          {props.experience.position || "Position"}
        </div>
        <div className="italic">{`${props.experience.title || " Title"}\n\n`}</div>
        <div>{`${
          props.experience.description || "Please describe your roles and responsibilities."
        }`}</div>
      </div>
    </div>
  );
}

export default PrevExperienceWidget;