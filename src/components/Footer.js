import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Footer(props) {
  return (
    <div className="footer">
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

export default connect(mapStateToProps)(Footer);
