import React, { Component } from 'react';
import './App.css';
import TodoList from './container/todoList';
import Filters from './filters/views/filters';
import AddTodo from './container/addTodo';


class App extends Component {
  render() {
    return (
     	<div className="app">
     		<AddTodo />
     		<Filters />
     		<TodoList />
     	</div>
    );
  }
}

export default App;
