import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import {nameInput} from "../redux/NameReducer"

function Form(props) {
  const [ nameState, setNameState ] = useState('');

  function handleChange(e) {
    setNameState(e.target.value);
  }
  function handleSubmit() {
    props.nameInput(nameState);
  }

  return (
    <div className="form">
      <h1>Form.js Component</h1>
      <input onChange={handleChange}></input>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>input test - {nameState}</p>
    </div>
  );
}

function mapStateToProps(state) {
  return { reduxName: state.reduxName };
}

export default connect(mapStateToProps)(Form);
