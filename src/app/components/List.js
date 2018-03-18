import React from 'react';
import Todo from './Todo';

class List extends React.Component {
  render() {
    const { editing, filter } = this.props;
    let { todos = [] } = this.props;

    if (filter) {
      const completed = filter === 'completed';
      todos = todos.filter((todo) => todo.completed === completed);
    }

    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                index={index}
                todo={todo}
                editing={editing}
                toggleTodo={this.props.toggleTodo}
                updateTodo={this.props.updateTodo}
                removeTodo={this.props.removeTodo}
                editTodo={this.props.editTodo}/>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default List;