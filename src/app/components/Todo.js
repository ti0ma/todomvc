import React from 'react';

const ENTER_KEY = 13;
const ESC_KEY = 27;

class Todo extends React.Component {
  handleEdit = (e) => {
    if (e.keyCode === ENTER_KEY) {
      e.preventDefault();

      this.props.updateTodo(this.props.index, e.currentTarget.value);
    }

    if (e.keyCode === ENTER_KEY || e.keyCode === ESC_KEY) {
      this.props.editTodo();
    }

    return true;
  }
  
  render() {
    const { index, editing } = this.props;
    const { task, completed } = this.props.todo;
    const isEditing = editing === index;

    return (
      <li className={completed ? 'completed' : isEditing ? 'editing' : ''}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={completed}
            onClick={() => this.props.toggleTodo(index)}/>
          <label onDoubleClick={() => this.props.editTodo(index)}>{task}</label>
          <button
            className="destroy"
            onClick={() => this.props.removeTodo(index)}></button>
        </div>
        {isEditing && (
          <input
            className='edit'
            type="text"
            autoFocus={true}
            autoComplete="off"
            defaultValue={task}
            onBlur={() => this.props.editTodo()}
            onKeyDown={this.handleEdit}/>
        )}
      </li>
    );
  }
}

export default Todo;