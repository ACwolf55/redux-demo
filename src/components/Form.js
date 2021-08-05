import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import {nameInput} from '../redux/NameReducer'

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
      <p>redux test - {props.words}</p>
    </div>
  );
}

function mapStateToProps(state) {
  //Notice how instead of just returning state like we do in Header.js & Footer.js
  //We decided that we will destructure the state so we just call words on line 23.
  return {
    words: state.NameReducer.reduxName
  }
}

export default connect(mapStateToProps,{nameInput})(Form);
