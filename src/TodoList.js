import TodoItem from "./TodoItem";
import React, { Component } from "react"; 

class TodoList extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.map(todo => (
              <TodoItem
                key={todo.id}
                //handleToggle={event => this.props.toggleTodo(todo.id)}
                handleDelete={event => this.props.handleDelete(todo.id)}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            ))}
          </ul>
        </section>
      );
    }
  }

export default TodoList;