import React from "react";

class PersonalWidget extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange = (event) => this.props.personal.onChange(event);
  handleReset = (event) => this.props.personal.onReset(event);

  render() {
    return (
      <div>
        <fieldset id={this.props.personal.uid}>
          <input
            name="firstname"
            value={this.props.personal.firstname}
            onChange={this.handleChange}
            type="text"
            placeholder="First name"
          ></input>
          <input
            name="lastname"
            value={this.props.personal.lastname}
            onChange={this.handleChange}
            type="text"
            placeholder="Last name"
          ></input>
          <input
            name="title"
            value={this.props.personal.title}
            onChange={this.handleChange}
            type="text"
            placeholder="Title"
          ></input>
          <input
            name="photo"
            value={this.props.personal.photo}
            onChange={this.handleChange}
            type="file"
            placeholder="Photo"
          ></input>
          <input
            name="address"
            value={this.props.personal.address}
            onChange={this.handleChange}
            type="text"
            placeholder="Address"
          ></input>
          <input
            name="phone"
            value={this.props.personal.phone}
            onChange={this.handleChange}
            type="tel"
            placeholder="Phone Number"
          ></input>
          <input
            name="email"
            value={this.props.personal.email}
            onChange={this.handleChange}
            type="email"
            placeholder="Email Address"
          ></input>
          <textarea
            name="description"
            value={this.props.personal.description}
            onChange={this.handleChange}
            type="text"
            placeholder="Description"
          ></textarea>
          <button type="click" onClick={this.handleReset}>Clear</button>
        </fieldset>
      </div>
    )
  }
}

export default PersonalWidget
