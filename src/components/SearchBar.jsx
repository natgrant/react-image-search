import React, { Component, Fragment } from "react";

export default class SearchBar extends Component {
  state = { userInput: "" };

  handleInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <div className="ui segment">
          <form onSubmit={this.handleFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input type="text" onChange={this.handleInputChange} />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
