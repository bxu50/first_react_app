import React, { PureComponent } from 'react';
import { WriterWrapper,
		 WritterTitle,
		 WritterList ,
		 WritterInfo} from '../style';
import { connect } from 'react-redux'
import {actionCreators} from '../store'

class Writer extends PureComponent {

	render() {
		return (
			<WriterWrapper>
				<WritterTitle>
				<h3 className = 'title'>recoment writter</h3>
				</WritterTitle>
				{
					
					this.props.list.map((item,index)=>{
						return( 
						<WritterList key = {index}>
					<img className = 'image' src = {item.get('imgUrl')}></img>	
					<WritterInfo>
						<span className = 'name'>{item.get('writterName')}</span>
						{
							item.get('subscribe') ?
							<h3 className= 'subscribe' onClick = {()=>this.props.handleUnsubs(index)}>unsubscribe </h3> :
							<h3 className= 'subscribe' onClick = {()=>this.props.handleSubs(index)}>+subscribe </h3> 
							
						}
						<h3 className = 'desc'> {item.get('desc')}</h3>
					</WritterInfo>
					
				</WritterList>)
				})
				}
				
					
			</WriterWrapper>
			
		)

	}
}
const mapState = (state)=>({
	list: state.getIn(['home', 'writterList']),
	sub: state.getIn(['home', 'subscribe'])

})
const mapDispatch = (dispatch)=>({
	handleSubs(index){
		dispatch(actionCreators.changeSub(index))
	},
	handleUnsubs(index){
		dispatch(actionCreators.changeUnsubs(index))
	}
})

export default connect (mapState, mapDispatch)(Writer);
