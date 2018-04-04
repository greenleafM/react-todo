import React,{Component} from 'react';

class Link extends Component{
	render(){
		const { active,children,clickHandler} = this.props;
		if(active){
			return <span>{children}</span>;
		}
		return (
				<a href="javascript:void(0)" onClick={e => {
					e.preventDefault();
					clickHandler();}
				}>
				{children}		
				</a>)
	}

}
export default Link;