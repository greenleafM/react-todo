import {VISIBILITY} from './filterTypes';
export const visibilityFilter = (filter) =>{
	return {
		type:VISIBILITY,
		filter
	}
}
export default visibilityFilter;