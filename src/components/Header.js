import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

function Header(props) {
  console.log(props.reduxName)
  return (
    <div className="header">
      <h1>Header.js Component</h1>
      <p>
        Hello, <b>{props.NameReducer.reduxName}</b>
      </p>
    </div>
  );
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header);
