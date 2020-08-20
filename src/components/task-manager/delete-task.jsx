import React from 'react';
import s from './task-manager.module.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Operation} from '../../reducers/task-manager-reducer.js';

class DeleteTask extends React.Component{
	constructor(props){
		super(props);		

		this._escHandler = this._escHandler.bind(this);    
    this._deleteClickHandler = this._deleteClickHandler.bind(this);
	}

	_escHandler(e){
		if (e.keyCode === 27) {			
			this.props.toggleDeleteHandler();
		}
		return null;
  }
    
  _deleteClickHandler(){
    this.props.removeTask(this.props.activeTask.id);
    this.props.toggleDeleteHandler();
  }

	render(){
		const {activeTask} = this.props;
		const {id, title} = activeTask;
		return (
			<section className={`${s.full_task} ${s.delete_task}`} onKeyDown={this._escHandler}>
				<div className={s.full_task__container}>
					<h2>Задача #{id}</h2>
					<div >
						<p className={s.full_task__label}>
							Краткое описание
						</p>
						<textarea className={s.full_task__info} value = {title} autoFocus onChange={()=>{}}>							
						</textarea>					
						<NavLink onClick={this._deleteClickHandler} to="/taskmanager" className={`${s.button} ${s.button__delete}`}>
							Удалить
						</NavLink>
            <button onClick={()=>{this.props.toggleDeleteHandler()}} className={s.new_task__button_close}></button>
					</div>				
				</div>
			</section>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	removeTask(id) {		
		dispatch(Operation.deleteTask(id));
  },
});

export {DeleteTask};
export default connect(null, mapDispatchToProps)(DeleteTask);
