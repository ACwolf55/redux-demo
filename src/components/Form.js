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


// MapDispatchToProps brings in action funcitons from your reducer file
const mapDispatchToProps = (dispatch) => ({
	nameInput: (input) => {
		dispatch(nameInput(input))
	},       
  //ex. ↓ having 2nd action to bring in ↓
  // setSecondAction: (something) => {
  //   dispatch(secondAction(something))
  // },
  
});

export default connect(mapStateToProps,mapDispatchToProps)(Form);

// ↓↓ this would also work to;delete lines 38-47 Since your putting the mapDispatchToProp parameter directly in the connect function

// export default connect(mapStateToProps,{nameInput})(Form);
