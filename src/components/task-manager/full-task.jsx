import React, {createRef} from 'react';
import s from './task-manager.module.css';
import {NavLink} from 'react-router-dom';
import {setFocusEnd} from '../../utils';

class FullTask extends React.Component{
	constructor(props){
		super(props);

		this._ref = createRef();

		this._escHandler = this._escHandler.bind(this);
	}

	_escHandler(e){
		if (e.keyCode === 27) {			
			this.props.toggleFullHandler();
		}
		return null;
	}

	componentDidMount(){
		const textarea = this._ref.current;
		setFocusEnd(textarea);
	}

	render(){
		const {activeTask, toggleFullHandler} = this.props;
		const {id, title} = activeTask;
		return (
			<section className={s.full_task} onKeyDown={this._escHandler}>
				<div className={s.full_task__container}>
					<h2>Задача #{id}</h2>
					<div >
						<p className={s.full_task__label}>
							Краткое описание
						</p>
						<textarea onChange={()=>{}} className={s.full_task__info} defaultValue={title} rows="5" ref={this._ref}>
							
						</textarea>					
						<NavLink onClick={toggleFullHandler} to="/taskmanager" className={`${s.button} ${s.full_task__button}`}>
							Вернуться в список
						</NavLink>
					</div>				
				</div>
			</section>
		);
	}
}

export default FullTask;
