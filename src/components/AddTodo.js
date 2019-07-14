import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitForm} style={{ display: "flex" }}>
        <input
          type="text"
          style={{ flex: "10", padding: "10px" }}
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.inputChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
