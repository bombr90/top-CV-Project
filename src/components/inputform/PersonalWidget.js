import React from "react";

const PersonalWidget = (props) => {
  const handleChange = (event) => props.personal.onChange(event)
  const handleImageChange = (event) => props.personal.onImageChange(event)
  const handleReset = (event) => props.personal.onReset(event)

  const handleEnterSubmit = (event) => {
    if(event.code === 'Enter') {
      event.preventDefault()
      return false
    }
  }

  return (
    <div>
      <fieldset id={props.personal.uid}>
        <input
          name="firstname"
          value={props.personal.firstname}
          onChange={handleChange}
          onKeyDown={handleEnterSubmit}
          type="text"
          placeholder="First name"
        ></input>
        <input
          name="lastname"
          value={props.personal.lastname}
          onChange={handleChange}
          onKeyDown={handleEnterSubmit}
          type="text"
          placeholder="Last name"
        ></input>
        <input
          name="title"
          value={props.personal.title}
          onChange={handleChange}
          onKeyDown={handleEnterSubmit}
          type="text"
          placeholder="Job Title"
        ></input>
        <input
          name="photo"
          onChange={handleImageChange}
          type="file"
          placeholder="Photo File"
        ></input>
        <input
          name="address"
          value={props.personal.address}
          onChange={handleChange}
          onKeyDown={handleEnterSubmit}
          type="text"
          placeholder="Address"
        ></input>
        <input
          name="phone"
          value={props.personal.phone}
          onChange={handleChange}
          onKeyDown={handleEnterSubmit}
          type="tel"
          placeholder="Phone Number"
        ></input>
        <input
          name="email"
          value={props.personal.email}
          onChange={handleChange}
          onKeyDown={handleEnterSubmit}
          type="email"
          placeholder="Email Address"
        ></input>
        <textarea
          name="description"
          value={props.personal.description}
          onChange={handleChange}
          type="text"
          placeholder="Description"
        ></textarea>
        <button type="click" onClick={handleReset}>
          Clear
        </button>
      </fieldset>
    </div>
  )
}

export default PersonalWidget