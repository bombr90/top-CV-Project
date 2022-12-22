import React from "react";

const ExperienceWidget = (props) => {

  const handleChange = (event) => props.experience.onChange(event);
  const handleReset = (event) => props.experience.onReset(event);
  const handleDelete = (event) => props.experience.onDelete(event);

  return (
    <div>
      <fieldset id={props.experience.uid}>
        <input
          name="position"
          value={props.experience.position}
          onChange={handleChange}
          type="text"
          placeholder="Job Position"
        ></input>
        <input
          name="title"
          value={props.experience.title}
          onChange={handleChange}
          type="text"
          placeholder="Job Title"
        ></input>
        <input
          name="start"
          value={props.experience.start}
          onChange={handleChange}
          type="date"
          placeholder="Start Date"
        ></input>
        <input
          name="end"
          value={props.experience.end}
          onChange={handleChange}
          type="date"
          placeholder="End Date"
        ></input>
        <textarea
          name="description"
          value={props.experience.description}
          onChange={handleChange}
          type="text"
          placeholder="Summary of roles and responsibilities"
        ></textarea>
        <button type="click" onClick={handleReset}>
          Clear
        </button>
        <button type="click" onClick={handleDelete}>
          Delete
        </button>
      </fieldset>
    </div>
  );
}

export default ExperienceWidget;