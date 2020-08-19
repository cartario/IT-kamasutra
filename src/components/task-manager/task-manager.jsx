import React from 'react';
import {connect} from 'react-redux';
import TaskList from './task-list.jsx';

const TaskManager = (props) => {
	const {tasks} = props;
	return (
		<TaskList tasks = {tasks}/>
	);
};

const mapStateToProps = (state) => ({	
	tasks: state.taskManagerPage.data,
})

export {TaskManager};
export default connect(mapStateToProps)(TaskManager);
