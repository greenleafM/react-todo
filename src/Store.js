import { combineReducers,createStore } from 'redux';
import todos from './todos/reducer';
import visibilityFilter from './filters/reducer';

const reducers = combineReducers({todos,visibilityFilter});
const store = createStore(reducers);

store.subscribe( () =>{
	console.log(store.getState());
});

export default store;