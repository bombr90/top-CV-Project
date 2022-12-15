import React from "react";

class EducationWidget extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange = (event) => this.props.education.onChange(event);
  handleReset = (event) => this.props.education.onReset(event);
  handleDelete = (event) => this.props.education.onDelete(event);

  render() {
    return (
      <div>
        <fieldset id={this.props.education.uid}>
          <input
            name="name"
            value={this.props.education.name}
            onChange={this.handleChange}
            type="text"
            placeholder="University Name"
          ></input>
          <input
            name="city"
            value={this.props.education.city}
            onChange={this.handleChange}
            type="text"
            placeholder="City"
          ></input>
          <input
            name="degree"
            value={this.props.education.degree}
            onChange={this.handleChange}
            type="text"
            placeholder="Degree"
          ></input>
          <input
            name="subject"
            value={this.props.education.subject}
            onChange={this.handleChange}
            type="text"
            placeholder="Subject"
          ></input>
          <input
            name="start"
            value={this.props.education.start}
            onChange={this.handleChange}
            type="date"
            placeholder="Start Date"
          ></input>
          <input
            name="end"
            value={this.props.education.end}
            onChange={this.handleChange}
            type="date"
            placeholder="End Date"
          ></input>
          <button type="button" onClick={this.handleReset}>
            Clear
          </button>
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </fieldset>
      </div>
    );
  }
}

export default EducationWidget;
