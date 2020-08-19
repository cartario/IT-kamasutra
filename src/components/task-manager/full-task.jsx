import React, {createRef} from 'react';
import s from './task-manager.module.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {setFocusEnd} from '../../utils';

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
		this.props.toggleFullHandler();
		console.log(this.state)
	}

	componentDidMount(){
		const textarea = this._ref.current;
		setFocusEnd(textarea);		
	}

	render(){
		const {activeTask} = this.props;
		const {id, title} = activeTask;
		return (
			<section className={s.full_task} onKeyDown={this._escHandler}>
				<div className={s.full_task__container}>
					<h2>Задача #{id}</h2>
					<div >
						<p className={s.full_task__label}>
							Краткое описание
						</p>
						<textarea onChange={this._changeHandler} className={s.full_task__info} defaultValue={title} rows="5" ref={this._ref}>
							
						</textarea>					
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
	
});

export {FullTask};
export default connect(null, mapDispatchToProps)(FullTask);
