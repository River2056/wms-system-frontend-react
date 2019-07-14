import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    const { isCompleted } = this.props.todo;
    return {
      textDecoration: isCompleted ? "line-through" : "none",
      backgroundColor: isCompleted ? "#28A745" : "#fbfbfb",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      color: isCompleted ? "#fff" : "#000",
      fontStyle: isCompleted ? "italic" : "normal"
    };
  };

  render() {
    const { id, title, isCompleted } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={{ fontSize: "20px" }}>
          <img
            src={isCompleted ? "img/tick.png" : "img/empty.png"}
            onClick={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            className="btn btn-danger btn-sm"
            style={btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
