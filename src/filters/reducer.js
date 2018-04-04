import * as FilterTypes from './filterTypes';

export const visibilityFilter = (state=FilterTypes.ALL,action) =>{
	switch(action.type){
		case FilterTypes.VISIBILITY:
			return action.filter;
		default:
			return state;	
	}
}
export default visibilityFilter