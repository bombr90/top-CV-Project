import React from "react";
import InputForm from './inputform/InputForm'
import OutputPreview from "./outputpreview/OutputPreview";
import uniqid from "uniqid";

class Main extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    inputFormData: {
      personal: {
        firstname: "John",
        lastname: "Doe",
        title: "Web Developer",
        photo: "",
        address: "123 Fake Street, Springfield CA",
        phone: "123-456-7890",
        email: "johndoe@dodo.extinct",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Mauris pharetra et ultrices neque ornare aenean. ",
      },
      experience: [
        {
          position: "Web Developer",
          title: "Senior Application Coder",
          start: "2022-01-01",
          end: "2022-12-31",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          uid: uniqid(),
        },
      ],
      education: [
        {
          name: "ACME College",
          city: "Springfield",
          degree: "Masters",
          subject: "Applied Basketweaving",
          start: "2020-01-01",
          end: "2022-01-01",
          uid: uniqid(),
        },
      ],
    },
    uid: uniqid(),
  }; 
  }

  inputFormLiftState = (childData) => {
    this.setState({inputFormData: childData})
  }

  render() {
    return (
      <div id="main">
        <InputForm parentCB = {this.inputFormLiftState} />
        <OutputPreview 
          personal={this.state.inputFormData.personal}
          education={this.state.inputFormData.education}
          experience={this.state.inputFormData.experience}
          key={this.state.uid}
        />
      </div>
    );
  }
}

export default Main;
