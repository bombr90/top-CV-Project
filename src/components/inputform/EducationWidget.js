import React from "react";

const EducationWidget = (props) => {
  const handleChange = (event) => props.education.onChange(event);
  const handleReset = (event) => props.education.onReset(event);
  const handleDelete = (event) => props.education.onDelete(event);

  return (
    <div>
      <fieldset id={props.education.uid}>
        <input
          name="name"
          value={props.education.name}
          onChange={handleChange}
          type="text"
          placeholder="University Name"
        ></input>
        <input
          name="city"
          value={props.education.city}
          onChange={handleChange}
          type="text"
          placeholder="City"
        ></input>
        <input
          name="degree"
          value={props.education.degree}
          onChange={handleChange}
          type="text"
          placeholder="Degree"
        ></input>
        <input
          name="subject"
          value={props.education.subject}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
        ></input>
        <input
          name="start"
          value={props.education.start}
          onChange={handleChange}
          type="date"
          placeholder="Start Date"
        ></input>
        <input
          name="end"
          value={props.education.end}
          onChange={handleChange}
          type="date"
          placeholder="End Date"
        ></input>
        <button type="button" onClick={handleReset}>
          Clear
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </fieldset>
    </div>
  );
}

export default EducationWidget;