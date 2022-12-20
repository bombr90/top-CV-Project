import React from "react";
import PrevExperienceWidget from './PrevExperienceWidget';
import PrevEducationWidget from './PrevEducationWidget';
import PrevPersonalWidget from './PrevPersonalWidget';
import defaultprofile from './../../assets/defaultprofile.png'

class OutputPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="outputpreview">
        <div id="pv-header">
          <div id="pv-name">{this.props.personal.firstname || "Your Name"} {this.props.personal.lastname || ''}</div>
          <div id="pv-title">{this.props.personal.title || "Your current job title"}</div>
        </div>
        <div id="pv-content">
          <div id="pv-description">
            <div className="pv-header pv-borderbottom">Description</div>
            <div className="pv-componentlist">
              {this.props.personal.description || 'Please tell us about yourself'}
            </div>
          </div>
          <div id="pv-experience">
            <div className="pv-header pv-borderbottom">Experience</div>
            {this.props.experience.map((entry) => {
              return (
                <PrevExperienceWidget
                  key={entry.uid}
                  experience={entry}
                />
              );
            })}
          </div>
          <div id="pv-education">
            <div className="pv-header pv-borderbottom">Education</div>
            {this.props.education.map((entry) => {
              return (
                <PrevEducationWidget
                  key={entry.uid}
                  education={entry}
                />
              );
            })}
          </div>
        </div>
        <div id="pv-personal">
          <img className="profile" src={this.props.personal.photo || defaultprofile} alt=''></img>
          <div className="pv-header">Personal Details</div>
          <PrevPersonalWidget
            key={this.props.personal.uid}
            personal={this.props.personal}
          />
        </div>
      </div>
    );
  }
}

export default OutputPreview;
