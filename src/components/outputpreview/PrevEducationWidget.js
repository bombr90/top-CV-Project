import React from "react";

const PrevEducationWidget = (props) => {
  return (
    <div className="preveducation">
      <div className="italic bold">
        {`${props.education.start || "Start"} to\n${
          props.education.end || "End"
        }`}
      </div>
      <div>
        <div className="pv-subheader">
          {`${props.education.name || "University"}, ${props.education.city || 'City'}`}
        </div>
        <span>{`Degree: ${props.education.degree || "Degree"}
        Subject: ${
          props.education.subject || "Subject"
        }`}</span>
      </div>
    </div>
    );
}

export default PrevEducationWidget;