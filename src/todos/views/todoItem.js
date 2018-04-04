import React,{Component} from 'react';

class TodoItem extends Component{
	render(){
		const {selected,deleteTodo,toggleTodo,text} = this.props;
		return (<li>
			<em className={selected?'selected':''} onClick={toggleTodo}></em>
			<label onClick={toggleTodo}>{text}</label>
			<span onClick={deleteTodo}>&times;</span>
			</li>);
	}
}

export default TodoItem;