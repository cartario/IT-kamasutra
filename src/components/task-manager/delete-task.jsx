import React from 'react';
import PropTypes from "prop-types";
import s from './task-manager.module.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Operation, ActionCreator} from './task-manager-reducer.js';
import {Toggles} from './name-space.js';

const DeleteTask = (props) => {
	const {activeTask, removeTask, toggleHandler} = props;

	const escHandler = (e) =>{
		if (e.keyCode === 27) {			
			toggleHandler(Toggles.DELETE);
		}
		return null;
	};
	
	const deleteClickHandler = () =>{
    removeTask(activeTask.id);
    toggleHandler(Toggles.DELETE);
  }

	return (
		<section className={`${s.full_task} ${s.delete_task}`} onKeyDown={escHandler}>
			<div className={s.full_task__container}>
				<h2>Задача #{activeTask.id}</h2>
				<div >
					<p className={s.full_task__label}>
						Краткое описание
					</p>
					<textarea className={s.full_task__info} value = {activeTask.title} autoFocus onChange={()=>{}}>							
					</textarea>					
					<NavLink onClick={deleteClickHandler} to="/taskmanager" className={`${s.button} ${s.button__delete}`}>
						Удалить
					</NavLink>
					<button onClick={()=>{toggleHandler(Toggles.DELETE)}} className={s.new_task__button_close}></button>
				</div>				
			</div>
		</section>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeTask(id) {
		if(id===1){
			dispatch(ActionCreator.removeTask(1)); 
			return null;
		}		
		dispatch(Operation.deleteTask(id));
  },
});

DeleteTask.propTypes = {  
	activeTask: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
	removeTask: PropTypes.func.isRequired,
	toggleHandler: PropTypes.func.isRequired,	
};

export {DeleteTask};
export default connect(null, mapDispatchToProps)(DeleteTask);
