import React from "react";

class PrevPersonalWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="prevpersonal">
        <div>
          <div className="pv-subheader">Address</div>
          <div>{this.props.personal.address || "Your Address"}</div>
        </div>
        <div>
          <div className="pv-subheader">Phone Number</div>
          <div>{this.props.personal.phone || "Phone/Cell Number"}</div>
        </div>
        <div>
          <div className="pv-subheader">Email</div>
          <div>{this.props.personal.email || "Personal Email"}</div>
        </div>
      </div>
    );
  }
}

export default PrevPersonalWidget;