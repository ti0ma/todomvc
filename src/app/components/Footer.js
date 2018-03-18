import React from 'react';
import { pluralize } from '../utils';

class Footer extends React.Component {
  handleFilter = (filter) => {
    return (e) => {
      e.preventDefault();
      this.props.setFilter(filter);
    };
  }
  
  render() {
    const { todos, filter } = this.props;
    const countLeft = todos.reduce((prev, curr) => {
      if (!curr.completed) {
        prev++;
      }
      return prev;
    }, 0);
    const hasCompleted = todos.length - countLeft > 0;
    return (
      <footer className="footer">
        <span className="todo-count">
          {countLeft} {pluralize('item', countLeft)} left
        </span>
        <ul className="filters">
          <li>
            <a
              href=""
              className={!filter ? 'selected' : ''}
              onClick={this.handleFilter(null)}>All</a>
          </li>
          <li>
            <a
              href=""
              className={filter === 'active' ? 'selected' : ''}
              onClick={this.handleFilter('active')}>Active</a>
          </li>
          <li>
            <a
              href=""
              className={filter === 'completed' ? 'selected' : ''}
              onClick={this.handleFilter('completed')}>Completed</a>
          </li>
        </ul>
        {hasCompleted && (
          <button
            className="clear-completed"
            onClick={this.props.clearCompleted}>Clear completed</button>
        )}
      </footer>
    );
  }
}

export default Footer;