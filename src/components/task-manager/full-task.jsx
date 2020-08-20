import React, {createRef} from 'react';
import s from './task-manager.module.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {setFocusEnd} from '../../utils';
import {Operation} from '../../reducers/task-manager-reducer.js';

class FullTask extends React.Component{
	constructor(props){
		super(props);
		this._ref = createRef();

		this.state = {
			text: this.props.activeTask.title,
		}

		this._escHandler = this._escHandler.bind(this);
		this._changeHandler = this._changeHandler.bind(this);
		this._backClickHandler = this._backClickHandler.bind(this);
	}

	_escHandler(e){
		if (e.keyCode === 27) {			
			this.props.toggleFullHandler();
		}
		return null;
	}

	_changeHandler(e){
		this.setState({
			text: e.target.value,
		});	
	}

	_backClickHandler(){		
		this.props.editTask(this.props.activeTask.id, this.state.text);
		this.props.toggleFullHandler();
		
	}

	componentDidMount(){
		const textarea = this._ref.current;		
		setFocusEnd(textarea);		
	}

	render(){
		const {activeTask} = this.props;
		const {id} = activeTask;
		return (
			<section className={s.full_task} onKeyDown={this._escHandler}>
				<div className={s.full_task__container}>
					<h2>Задача #{id}</h2>
					<div >
						<p className={s.full_task__label}>
							Краткое описание
						</p>
						<input onChange={this._changeHandler} className={s.full_task__info} value={this.state.text} rows="5" ref={this._ref}>
							
						</input>					
						<NavLink onClick={this._backClickHandler} to="/taskmanager" className={`${s.button} ${s.full_task__button}`}>
							Вернуться в список
						</NavLink>
					</div>				
				</div>
			</section>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	editTask: (id, text) => {		
		dispatch(Operation.editTask(id, text));		
	},
});

export {FullTask};
export default connect(null, mapDispatchToProps)(FullTask);
