import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

function Header(props) {
  return (
    <div className="header">
      <h1>Header.js Component</h1>
      <p>
        Hello, <b>{props.reduxName}</b>
      </p>
    </div>
  );
}
function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps)(Header);
