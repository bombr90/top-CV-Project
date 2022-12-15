import React from "react";

class ExperienceWidget extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange = (event) => this.props.experience.onChange(event)
  handleReset = (event) => this.props.experience.onReset(event)
  handleDelete = (event) => this.props.experience.onDelete(event)

  render() {
    return (
      <div>
        <fieldset id={this.props.experience.uid}>
          <input
            name="position"
            value={this.props.experience.position}
            onChange={this.handleChange}
            type="text"
            placeholder="Position"
          ></input>
          <input
            name="title"
            value={this.props.experience.title}
            onChange={this.handleChange}
            type="text"
            placeholder="Title"
          ></input>
          <input
            name="start"
            value={this.props.experience.start}
            onChange={this.handleChange}
            type="date"
            placeholder="Start Date"
          ></input>
          <input
            name="end"
            value={this.props.experience.end}
            onChange={this.handleChange}
            type="date"
            placeholder="End Date"
          ></input>
          <textarea
            name="description"
            value={this.props.experience.description}
            onChange={this.handleChange}
            type="text"
            placeholder="Summary of roles and responsibilities"
          ></textarea>
          <button type="reset" onClick={this.handleReset}>Clear</button>
          <button type='button' onClick={this.handleDelete}>Delete</button>
        </fieldset>
      </div>
    );
  }
};

export default ExperienceWidget;
