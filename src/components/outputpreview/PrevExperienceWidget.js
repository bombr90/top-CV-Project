import React from "react";

class PrevExperienceWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="prevexperience">
        <div className="italic bold">
          {`${this.props.experience.start || "Start"} to\n${
            this.props.experience.end || "End"
          }`}
        </div>
        <div>
          <div className="pv-subheader">
            {this.props.experience.position || "Position"}
          </div>
          <div className="italic">{`${this.props.experience.title || " Title"}\n\n`}</div>
          <div>{`${
            this.props.experience.description || "Please describe your roles and responsibilities."
          }`}</div>
        </div>
      </div>
    );
  }
}

export default PrevExperienceWidget;