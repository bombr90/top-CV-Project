import React from "react";

class PrevEducationWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preveducation">
        <div className="italic bold">
          {`${this.props.education.start || "Start"} to\n${
            this.props.education.end || "End"
          }`}
        </div>
        <div>
          <div className="pv-subheader">
            {`${this.props.education.name || "University"}, ${this.props.education.city || 'City'}`}
          </div>
          <span>{`Degree: ${this.props.education.degree || "Degree"}
          Subject: ${
            this.props.education.subject || "Subject"
          }`}</span>
        </div>
      </div>
    );
  }
}

export default PrevEducationWidget;