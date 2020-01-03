import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "./actions";


class TodoItem extends Component {
    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.completed}
              onChange={event => this.props.toggleTodo(this.props.id)}
            />  
            <label>{this.props.title}</label>
            <button
              className="destroy"
              onClick={event => this.props.handleDelete(event, this.props.todoId)}
            />
          </div>
        </li>
      );
    }
  }

  const mapDispatchToProps = {
    toggleTodo
  };

  export default connect(
    null,
    mapDispatchToProps
  )(TodoItem);