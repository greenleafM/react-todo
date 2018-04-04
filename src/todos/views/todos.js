import React,{Component} from 'react';
import TodoItem from './todoItem';

class Todos extends Component{
	render(){
		const {todos,onTodoToggle,onTodoDelete} = this.props;
		return (<ul className="todo-list">
				{
				todos.map(todo => {
					return (<TodoItem 
							key={todo.id}
							text={todo.text}
							selected={todo.selected}
							toggleTodo={() => onTodoToggle(todo.id)}
							deleteTodo={() => onTodoDelete(todo.id)}
					  />)
					})
				}
			</ul>)
	}
}

export default Todos;