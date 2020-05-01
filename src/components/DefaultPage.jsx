import React, { Component } from "react";

class DefaultPage extends Component {
  render() {
    return (
      <div className="container text-title">
        <h1 className="my-4">404 error: page not found</h1>
        <h5>
          the requested url:{" "}
          <span className="text-danger">
            "{this.props.location.pathname}" was not found
          </span>
          {}
        </h5>
      </div>
    );
  }
}

export default DefaultPage;
