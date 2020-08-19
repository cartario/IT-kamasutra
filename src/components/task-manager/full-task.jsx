import React from 'react';
import s from './task-manager.module.css';
import {NavLink} from 'react-router-dom';

const description = `lorem ipsum lorem ipsum 
lorem ipsum 
lorem ipsum lorem ipsum 
lorem ipsum 
lorem ipsum 
lorem ipsum lorem ipsum lorem ipsum `

class FullTask extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const {activeTask, toggleFullHandler} = this.props;
		const {id, title} = activeTask;
		return (
			<section className={s.full_task}>
				<div className={s.full_task__container}>
					<h2>Задача #{id}</h2>
					<div >
						<p className={s.full_task__label}>
							Краткое описание
						</p>
						<textarea onChange={()=>{}} className={s.full_task__info} defaultValue={title} rows="5">
							
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
