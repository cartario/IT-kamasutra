import React from 'react';
import s from './task-manager.module.css';
import {connect} from 'react-redux';
import {Operation} from './task-manager-reducer.js';
import {Toggles} from './name-space.js';

class CreateTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: 1,
			text: ``,
			isErr: false,
		};

		this._submitHandler = this._submitHandler.bind(this);	
		this._closeTaskClickHandler = this._closeTaskClickHandler.bind(this);
		this._changeHandler = this._changeHandler.bind(this);
		this._escHandler = this._escHandler.bind(this);
	}

	_submitHandler(e){
		e.preventDefault();

		if(!this.state.text){
			this.setState({
				isErr: true,
			})
		} else {			
			this.props.addTask(this.state.text);
			this.setState({
				text: '',
			});
			this.props.toggleHandler(Toggles.CREATE);
		}
	}

	_closeTaskClickHandler(){
		this.props.toggleHandler(Toggles.CREATE);
	}

	_changeHandler(e){
		this.setState({
			text: e.target.value,
			isErr: false,
		});		
	}

	_escHandler(e){
		if (e.keyCode === 27) {			
			this.props.toggleHandler(Toggles.CREATE);
		}
		return null;
	}

	render() {
		return (
			<section className={this.state.isErr ? `${s.new_task} ${s.shake}` : s.new_task } onKeyDown={this._escHandler}>
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
							value = {this.state.text}
							autoFocus
						/>
						{this.state.isErr && <p className={s.new_task__err}> Заголовок не может быть пустым</p>}
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
	addTask (text) {		
		dispatch(Operation.postTask(text));
  },  
})

export {CreateTask};
export default connect(null, mapDispatchToProps)(CreateTask);
