import React from 'react';

const ENTER_KEY = 13;

class Header extends React.Component {  
  handleInput = (e) => {
    // Ignore everything but the enterkey
    if (e.keyCode !== ENTER_KEY) {
      return true;
    }
    // Prevent default event
    e.preventDefault();
    // Save the todo
    const value = e.currentTarget.value;
    this.props.addTodo(value);
    // Clrear the input
    e.currentTarget.value = '';
  }

  toggleAll = (e) => {
    const value = e.currentTarget.checked;
    
    this.props.toggleAll(value);
  };

  render() {
    return (
      <header>
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus="true"
          onKeyDown={this.handleInput}/>
        {this.props.todoCount > 0 &&
          <input
            className="toggle-all"
            type="checkbox"
            onClick={this.toggleAll}/>
        }
      </header>
    );
  }
}

export default Header;