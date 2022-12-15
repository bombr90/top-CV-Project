import React from "react";
import PersonalWidget from './PersonalWidget'
import ExperienceWidget from "./ExperienceWidget"
import EducationWidget from "./EducationWidget";
import uniqid from 'uniqid'

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    //Personal Handle Binding
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handlePersonalReset = this.handlePersonalReset.bind(this);

    //Experience Handle Binding
  this.handleExperienceChange = this.handleExperienceChange.bind(this);
  this.handleExperienceReset = this.handleExperienceReset.bind(this);
  this.handleExperienceDelete = this.handleExperienceDelete.bind(this);
  this.handleExperienceNew = this.handleExperienceNew.bind(this);

    // Education Handle Binding
  this.handleEducationChange = this.handleEducationChange.bind(this);
  this.handleEducationReset = this.handleEducationReset.bind(this);
  this.handleEducationDelete = this.handleEducationDelete.bind(this);
  this.handleEducationNew = this.handleEducationNew.bind(this);


    //Local Handle Binding
    this.handleSubmit = this.handleSubmit.bind(this);

    // Form Local State
    this.state = {
      personal: {
        firstname: "",
        lastname: "",
        title: "",
        photo: "",
        address: "",
        phone: "",
        email: "",
        description: "",
        uid: uniqid(),
        onChange: this.handlePersonalChange,
        onReset: this.handlePersonalReset,
      },
      defaultExperience: {
        position: "",
        title: "",
        start: "",
        end: "",
        description: ``,
        uid: "",
        onChange: this.handleExperienceChange,
        onReset: this.handleExperienceReset,
        onDelete: this.handleExperienceDelete,
      },
      experienceEntries: [],
      defaultEducation: {
        name: "",
        city: "",
        degree: "",
        Subject: "",
        start: "",
        end: "",
        uid: "",
        onChange: this.handleEducationChange,
        onReset: this.handleEducationReset,
        onDelete: this.handleEducationDelete,
      },

      educationEntries: [],
    };
  }

  //--------------------------------
  // ##Local Events
  //--------------------------------
  handleSubmit(event) {
    event.preventDefault();
    console.log("Submission Successful!")
  }

  //--------------------------------
  // ##Personal Widget Events
  //--------------------------------
  handlePersonalChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    const newPersonal = { ...this.state.personal, [key]: value };
    this.setState({ personal: newPersonal });
  }

  handlePersonalReset(event) {
    const newPersonal = {
      ...this.state.personal,
      firstname: "",
      lastname: "",
      title: "",
      photo: "",
      address: "",
      phone: "",
      email: "",
      description: "",
    };
    this.setState({ personal: newPersonal });
  }

  //--------------------------------
  // ##Experience Widget Events
  //--------------------------------
  handleExperienceChange(event) {
    const target = event.target;
    const id = target.parentElement.id;
    const name = target.name;
    const value = target.value;
    this.setState((prevState) => {
      const index = prevState.experienceEntries.findIndex(
        (el) => el.uid === id
      );
      // if (index < 0) return false;
      const newExperienceEntries = { ...this.state.experienceEntries };
      newExperienceEntries[index][name] = value;
      return newExperienceEntries;
    });
  }

  handleExperienceReset(event) {
    this.setState((prevState) => {
      const index = prevState.experienceEntries.findIndex(
        (el) => el.uid === event.target.parentElement.id
      );
      const existingEntry = {
        ...prevState.experienceEntries[index],
        position: "",
        title: "",
        start: "",
        end: "",
        description: "",
      };
      const newEntries = [...prevState.experienceEntries];
      newEntries[index] = existingEntry;
      return { ...prevState, experienceEntries: newEntries };
    });
  }

  handleExperienceDelete(event) {
    this.setState((prevState) => {
      const newEntries = [...prevState.experienceEntries].filter(
        (el) => el.uid !== event.target.parentElement.id
      );
      return { ...prevState, experienceEntries: newEntries };
    });
  }

  handleExperienceNew(event) {
    this.setState((prevState) => {
      const newEntry = { ...prevState.defaultExperience, uid: uniqid() };
      const newEntries = [...prevState.experienceEntries, newEntry];
      return { ...prevState, experienceEntries: newEntries };
    });
  }

  //--------------------------------
  // ##Education Widget Events
  //--------------------------------
  handleEducationChange(event) {
    const target = event.target;
    const id = target.parentElement.id;
    const name = target.name;
    const value = target.value;
    this.setState((prevState) => {
      const index = prevState.educationEntries.findIndex(
        (el) => el.uid === id
      );
      const newEducationEntries = { ...this.state.educationEntries };
      newEducationEntries[index][name] = value;
      return newEducationEntries;
    });
  }

  handleEducationReset(event) {
    this.setState((prevState) => {
      const index = prevState.educationEntries.findIndex(
        (el) => el.uid === event.target.parentElement.id
      );
      const existingEntry = {
        ...prevState.educationEntries[index],
        name: "",
        city: "",
        degree: "",
        Subject: "",
        start: "",
        end: "",
      };
      const newEntries = [...prevState.educationEntries];
      newEntries[index] = existingEntry;
      return { ...prevState, educationEntries: newEntries };
    });
  }

  handleEducationDelete(event) {
    this.setState((prevState) => {
      const newEntries = [...prevState.educationEntries].filter(
        (el) => el.uid !== event.target.parentElement.id
      );
      return { ...prevState, educationEntries: newEntries };
    });
  }

  handleEducationNew(event) {
    this.setState((prevState) => {
      const newEntry = { ...prevState.defaultEducation, uid: uniqid() };
      const newEntries = [...prevState.educationEntries, newEntry];
      return { ...prevState, educationEntries: newEntries };
    });
  }
  //--------------------------------
  // ##Render
  //--------------------------------

  render() {
    return (
      <div id="inputform">
        The Input Form...
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Personal Information</legend>
            <PersonalWidget
              key={this.state.personal.uid}
              personal={this.state.personal}
            />
          </fieldset>
          <fieldset>
            <legend>Experience</legend>
            {this.state.experienceEntries.map((entry) => {
              return <ExperienceWidget key={entry.uid} experience={entry} />;
            })}
            <button type="click" onClick={this.handleExperienceNew}>
              Add New Experience
            </button>
          </fieldset>
          <fieldset>
            <legend>Education</legend>
            {this.state.educationEntries.map((entry) => {
              return <EducationWidget key={entry.uid} education={entry} />;
            })}
            <button type="click" onClick={this.handleEducationNew}>
              Add New Education
            </button>
          </fieldset>
          <button type="submit">Generate Preview</button>
        </form>
      </div>
    );
  }
}

export default InputForm;


 // this.baseState = Object.keys(this.props.experience).reduce((obj, key) => {
    //   obj[key] = "";
    //   return obj;
    // }, {});