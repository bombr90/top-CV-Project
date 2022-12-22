import React, { useState } from "react";
import PersonalWidget from './PersonalWidget'
import ExperienceWidget from "./ExperienceWidget"
import EducationWidget from "./EducationWidget";
import uniqid from 'uniqid'

const InputForm = (props) => {
  const [state, setState] = useState(
    {
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
        onChange: handlePersonalChange,
        onImageChange: handlePersonalImageChange,
        onReset: handlePersonalReset,
      },
      defaultExperience: {
        position: "",
        title: "",
        start: "",
        end: "",
        description: ``,
        uid: "",
        onChange: handleExperienceChange,
        onReset: handleExperienceReset,
        onDelete: handleExperienceDelete,
      },
      experienceEntries: [],
      defaultEducation: {
        name: "",
        city: "",
        degree: "",
        subject: "",
        start: "",
        end: "",
        uid: "",
        onChange: handleEducationChange,
        onReset: handleEducationReset,
        onDelete: handleEducationDelete,
      },

      educationEntries: [],
    }
  )
  
  //--------------------------------
  // ##Local Events
  //--------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    props.parentCB({personal: state.personal, experience: state.experienceEntries, education: state.educationEntries})
  }

  const handleEnter = (event) =>{
    if(event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  }
  
  //--------------------------------
  // ##Personal Widget Events
  //--------------------------------
  function handlePersonalChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    setState(prev => {
      const newPersonal = { ...prev.personal, [key]: value };
      return ({
        ...prev,
        personal:newPersonal
      })
    })
  }

  function handlePersonalImageChange(event) {
    const key = event.target.name;
    const value = URL.createObjectURL(event.target.files[0]);
    setState((prev) => {
      const newPersonal = { ...prev.personal, [key]: value };
      return {
        ...prev,
        personal: newPersonal
      };
    });
  }

  function handlePersonalReset(event) {
    event.stopPropagation();
    const newPersonal = {
      ...state.personal,
      firstname: "",
      lastname: "",
      title: "",
      address: "",
      phone: "",
      email: "",
      description: "",
    };
    setState((prevState) => ({
      ...prevState,
      personal: newPersonal,
    }));
  }

  //--------------------------------
  // ##Experience Widget Events
  //--------------------------------
  function handleExperienceChange(event) {
    const target = event.target;
    const id = target.parentElement.id;
    const name = target.name;
    const value = target.value;

    setState((prevState) => {
      const index = prevState.experienceEntries.findIndex(
        (el) => el.uid === id
      );
      const newExperienceEntries = [ ...prevState.experienceEntries ];
      newExperienceEntries[index][name] = value;
      return ({
        ...prevState, 
        experienceEntries: newExperienceEntries
      });
    });
  }

  function handleExperienceReset(event) {
    setState((prevState) => {
      const index = prevState.experienceEntries.findIndex(
        (el) => el.uid === event.target.parentElement.id
      );
      const resetEntry = {
        ...prevState.experienceEntries[index],
        position: "",
        title: "",
        start: "",
        end: "",
        description: "",
      };
      const newEntries = [...prevState.experienceEntries];
      newEntries[index] = resetEntry;
      return { ...prevState, experienceEntries: newEntries };
    });
  }

  function handleExperienceDelete(event) {
    setState((prevState) => {
      const newEntries = [...prevState.experienceEntries].filter(
        (el) => el.uid !== event.target.parentElement.id
      );
      return { ...prevState, experienceEntries: newEntries };
    });
  }

  function handleExperienceNew(event) {
    setState((prevState) => {
      const newEntry = { ...prevState.defaultExperience, uid: uniqid() };
      const newEntries = [...prevState.experienceEntries, newEntry];
      return { ...prevState, experienceEntries: newEntries };
    });
  }

  //--------------------------------
  // ##Education Widget Events
  //--------------------------------
  function handleEducationChange(event) {
    const target = event.target;
    const id = target.parentElement.id;
    const name = target.name;
    const value = target.value;
    setState((prevState) => {
      const index = prevState.educationEntries.findIndex(
        (el) => el.uid === id
      );
      const newEducationEntries = [ ...prevState.educationEntries ];
      newEducationEntries[index][name] = value;
      return ({
        ...prevState,
        educationEntries: newEducationEntries
      })
    });
  }

  function handleEducationReset(event) {
    setState((prevState) => {
      const index = prevState.educationEntries.findIndex(
        (el) => el.uid === event.target.parentElement.id
      );
      const resetEntry = {
        ...prevState.educationEntries[index],
        name: "",
        city: "",
        degree: "",
        Subject: "",
        start: "",
        end: "",
      };
      const newEntries = [...prevState.educationEntries];
      newEntries[index] = resetEntry;
      return { ...prevState, educationEntries: newEntries };
    });
  }

  function handleEducationDelete(event) {
    setState((prevState) => {
      const newEntries = [...prevState.educationEntries].filter(
        (el) => el.uid !== event.target.parentElement.id
      );
      return { ...prevState, educationEntries: newEntries };
    });
  }

  function handleEducationNew(event) {
    setState((prevState) => {
      const newEntry = { ...prevState.defaultEducation, uid: uniqid() };
      const newEntries = [...prevState.educationEntries, newEntry];
      return { ...prevState, educationEntries: newEntries };
    });
  }

  return (
    <div id="inputform">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <PersonalWidget
            key={state.personal.uid}
            personal={state.personal}
          />
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          {state.experienceEntries.map((entry) => {
            return <ExperienceWidget key={entry.uid} experience={entry} />;
          })}
          <button type="click" onClick={handleExperienceNew}>
            Add New Experience
          </button>
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {state.educationEntries.map((entry) => {
            return <EducationWidget key={entry.uid} education={entry} />;
          })}
          <button type="click" onClick={handleEducationNew}>
            Add New Education
          </button>
        </fieldset>
        <button type="submit">Generate Preview</button>
      </form>
    </div>
  );
}

export default InputForm;