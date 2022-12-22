import React from "react";

const PrevPersonalWidget = (props) => {
  return (
    <div className="prevpersonal">
      <div>
        <div className="pv-subheader">Address</div>
        <div>{props.personal.address || "Your Address"}</div>
      </div>
      <div>
        <div className="pv-subheader">Phone Number</div>
        <div>{props.personal.phone || "Phone/Cell Number"}</div>
      </div>
      <div>
        <div className="pv-subheader">Email</div>
        <div>{props.personal.email || "Personal Email"}</div>
      </div>
    </div>
  );
}

export default PrevPersonalWidget;