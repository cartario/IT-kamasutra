import {addPostAC, updatePostAC} from '../../../../reducers/profile-reducer.js';
import NewPost from './new-post.jsx';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		profilePageState: state.profilePage,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPostLocal: ()=>{
			dispatch(addPostAC())
		}, 
		handlerNewPost: (value)=>{
			dispatch(updatePostAC(value))
		},
	}
}


const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);
export default NewPostContainer;