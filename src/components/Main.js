import React from "react";
import InputForm from './inputform/InputForm'
import OutputPreview from "./outputpreview/OutputPreview";

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        The Meat and potatoes of this app...
        <InputForm />
        <OutputPreview />
      </div>
    );
  }
}

export default Main;
