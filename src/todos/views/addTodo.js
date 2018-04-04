import React,{Component} from 'react';
import {addTodo} from './../actions';
// import PropTypes from 'prop-types';

class AddTodo extends Component{

	submit(e){
		e.preventDefault();
		const inp = this.refs.input;
		if(!inp.value.trim()){
			inp.focus();
			return;
		}
		this.props.dispatch(addTodo(inp.value));
		inp.value = "";
		inp.focus();
	}

	render(){
		return (<form className="todo-add" onSubmit={e => this.submit(e)}>
				<input type="text" placeholder="请输入..." ref="input"/>
				<button type="button" onClick={e => this.submit(e)}>新增元素</button>
			</form>);
	}
}

export default AddTodo;