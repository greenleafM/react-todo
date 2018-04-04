import {connect} from 'react-redux';
import { visibilityFilter} from './../filters/actions';
import Link from './../filters/views/link';

const mapStateToProps = (state,ownProps) =>({
	active:ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch,ownProps) =>({
	clickHandler:() =>{
		dispatch(visibilityFilter(ownProps.filter));
	}
});
const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);

export default FilterLink;