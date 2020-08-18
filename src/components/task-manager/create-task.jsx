import React from 'react';
import s from './task-manager.module.css';
import { connect } from 'react-redux';
import {ActionCreator} from '../../reducers/task-manager-reducer.js';

const isErr = false;

class CreateTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: 1,
			text: ``,
		};

		this._submitHandler = this._submitHandler.bind(this);	
		this._closeTaskClickHandler = this._closeTaskClickHandler.bind(this);
		this._changeHandler = this._changeHandler.bind(this);
	}

	_submitHandler(e){
		e.preventDefault();
    this.props.addTask(this.props.currentId, this.state.text)
    console.log(this.props.currentId)
	}

	_closeTaskClickHandler(){
    this.props.removeTask(103)
	}

	_changeHandler(e){
		this.setState({
			text: e.target.value
		});		
	}

	render() {
		return (
			<section className={s.new_task}>
				<div className={s.new_task__container}>
					<form onSubmit={this._submitHandler} className={s.new_task__form}>
						<label className={s.new_task__label}
							htmlFor="new-task"						
						>
							Краткое описание
						</label>
						<input onChange={this._changeHandler} className={s.new_task__input}
							name = "new_task"
							id="new-task"
							required
						/>
						{isErr && <p className={s.new_task__err}> Заголовок не может быть пустым</p>}
						<button className={`${s.button} ${s.new_task__button}`} type="submit">
							Создать
						</button>
					</form>
					<button onClick={this._closeTaskClickHandler} className={s.new_task__button_close}></button>
				</div>
			</section>
		);
	}
};


const mapDispatchToProps = (dispatch) => ({
	addTask (id, text) {
		dispatch(ActionCreator.addTask(id, text));
  }, 
  
  removeTask(id) {
		dispatch(ActionCreator.removeTask(id));
	}, 
})

export {CreateTask};
export default connect(null, mapDispatchToProps)(CreateTask);
