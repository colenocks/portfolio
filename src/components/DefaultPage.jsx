import React, { Component } from "react";

class DefaultPage extends Component {
  render() {
    return (
      <main>
        <div className="flex-center title">
          <h1 className="lg-heading">404 error: page not found</h1>
        </div>
        <div className="flex-center">
          <h3>
            the requested url:{" "}
            <span className="text-secondary">
              "{this.props.location.pathname}"
            </span>{" "}
            was not found
          </h3>
        </div>
      </main>
    );
  }
}

export default DefaultPage;
