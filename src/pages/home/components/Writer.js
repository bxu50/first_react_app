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
							this.props.sub ? 
							<h3 className= 'subscribe' onClick = {this.props.handleSubs}>unsubscribe </h3> :
							<h3 className= 'subscribe' onClick = {this.props.handleSubs}>+subscribe </h3>
						}
						<h3 className = 'desc'> {item.get('desc')}</h3>
					</WritterInfo>
					
				</WritterList>)
				})
				}
				
				
				<WritterList>
					<img className = 'image' src = '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'></img>	
					<WritterInfo>
						<span className = 'name'>Tea Story</span>
						<h3 className= 'subscribe'>+subscribe </h3>
						<h3 className = 'desc'> wrote 443.9k words. 11.5 like</h3>
					</WritterInfo>
					
				</WritterList>
				
					
			</WriterWrapper>
			
		)

	}
	
}
const mapState = (state)=>({
	list: state.getIn(['home', 'writterList']),
	sub: state.getIn(['home', 'subscribe'])

})
const mapDispatch = (dispatch)=>({
	handleSubs(){
		dispatch(actionCreators.changeSub())
	}
})

export default connect (mapState, mapDispatch)(Writer);
