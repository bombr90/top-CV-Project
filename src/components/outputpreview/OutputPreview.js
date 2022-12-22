import React from "react";
import PrevExperienceWidget from './PrevExperienceWidget';
import PrevEducationWidget from './PrevEducationWidget';
import PrevPersonalWidget from './PrevPersonalWidget';
import defaultprofile from './../../assets/defaultprofile.png'

const OutputPreview = (props) => {
  return (
    <div id="outputpreview">
      <div id="pv-header">
        <div id="pv-name">
          {props.personal.firstname || "Your Name"}{" "}
          {props.personal.lastname || ""}
        </div>
        <div id="pv-title">
          {props.personal.title || "Your current job title"}
        </div>
      </div>
      <div id="pv-content">
        <div id="pv-description">
          <div className="pv-header pv-borderbottom">Description</div>
          <div className="pv-componentlist">
            {props.personal.description ||
              "Please tell us about yourself"}
          </div>
        </div>
        <div id="pv-experience">
          <div className="pv-header pv-borderbottom">Experience</div>
          {props.experience.map((entry) => {
            return (
              <PrevExperienceWidget key={entry.uid} experience={entry} />
            );
          })}
        </div>
        <div id="pv-education">
          <div className="pv-header pv-borderbottom">Education</div>
          {props.education.map((entry) => {
            return <PrevEducationWidget key={entry.uid} education={entry} />;
          })}
        </div>
      </div>
      <div id="pv-personal">
        <img
          className="profile"
          src={props.personal.photo || defaultprofile}
          alt=""
        ></img>
        <div className="pv-header">Personal Details</div>
        <PrevPersonalWidget
          key={props.personal.uid}
          personal={props.personal}
        />
      </div>
    </div>
  );
  
}

export default OutputPreview;