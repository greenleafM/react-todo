import {ADD_TODO,TOGGLE_TODO,DELETE_TODO} from './todoTypes';
let todoIndex = 0;
const todo = (state,action) =>{
	switch(action.type){
		case ADD_TODO:
			return {
				id:todoIndex+=1,
				text:action.text,
				selected:false
			};
		case TOGGLE_TODO:
			if(state.id !== action.id){
				return state;
			}
			return Object.assign({},state,{selected:!state.selected});
		default:
			return state;	
	}
}

const todoList = (state=[],action) =>{
	switch(action.type){
		case ADD_TODO:
			return [...state,todo(undefined,action)];
		case TOGGLE_TODO:
			return state.map((t) => todo(t,action));
		case DELETE_TODO:
			return state.filter((t) => t.id !== action.id);
		default:
			return state;		
	}
}

export default todoList;