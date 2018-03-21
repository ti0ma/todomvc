import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    todos: [],
    editing: -1,
    filter: null
  };

  addTodo = (task) => {
    const todos = this.state.todos;
    const newTask = {
      completed: false,
      task
    };
    this.setState({ todos: todos.concat(newTask) });
  }

  updateTodo = (index, task) => {
    const todos = [...this.state.todos];
    todos[index].task = task;
    this.setState({ todos });
  }

  toggleTodo = (index) => {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  }

  removeTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }

  toggleAll = (value) => {
    const todos = this.state.todos.map((todo) => {
      todo.completed = value;
      return todo;
    });
    this.setState({ todos });
  }

  editTodo = (index = -1) => {
    this.setState({ editing: index });
  }

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({ todos });
  }

  setFilter = (value) => {
    this.setState({ filter: value });
  }

  componentWillMount() {
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { todos } = nextState;

    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  renderList() {
    return (this.state.todos.length > 0 &&
      <div>
        <List
          todos={this.state.todos}
          editing={this.state.editing}
          filter={this.state.filter}
          toggleTodo={this.toggleTodo}
          updateTodo={this.updateTodo}
          removeTodo={this.removeTodo}
          editTodo={this.editTodo}/>
        <Footer
          todos={this.state.todos}
          filter={this.state.filter}
          clearCompleted={this.clearCompleted}
          setFilter={this.setFilter} />
      </div>
    );
  }
  
  render() {
    return (
      <div>
        <Header
          todoCount={this.state.todos.length}
          addTodo={this.addTodo}
          toggleAll={this.toggleAll}/>
        {this.renderList()}
      </div>
    );
  }
}

export default App;