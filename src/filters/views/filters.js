import React,{Component} from 'react';
import FilterLink from './../../container/filterLink';
import * as FilterTypes from './../filterTypes';
class Filters extends Component{
	render(){
		return (<div className="todo-filter">
			请选择：
			<FilterLink filter={FilterTypes.ALL} key={1}>{'全部'}</FilterLink>
			<FilterLink filter={FilterTypes.SELECTED} key={2}>{'已选'}</FilterLink>
			<FilterLink filter={FilterTypes.NORMAL} key={3}>{'未选'}</FilterLink>
			</div>);
	}
}

export default Filters;