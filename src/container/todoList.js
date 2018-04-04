import {connect} from 'react-redux';
import * as FilterTypes from './../filters/filterTypes';
import Todos from './../todos/views/todos';
import * as Actions from './../todos/actions';

const getVisibility = (todos,filter) =>{
	console.log(todos);
	switch(filter){
		case FilterTypes.ALL:
			return todos;
		case FilterTypes.SELECTED:
			return todos.filter((t) => t.selected);
		case FilterTypes.NORMAL:
			return todos.filter((t) => !t.selected);
		default:
			new Error("你有一个错误在这里 filter是="+filter);
			break;			
	}
};

const mapStateToProps = (state) =>({
	todos:getVisibility(state.todos,state.visibilityFilter)
});

const mapDispatchToProps = {
	onTodoToggle:Actions.toggleTodo,
	onTodoDelete:Actions.deleteTodo
}
const TodoList = connect(mapStateToProps,mapDispatchToProps)(Todos);

export default TodoList;