import React from 'react';
import s from './task-manager.module.css';
import {NavLink} from 'react-router-dom';

const description = `lorem ipsum lorem ipsum 
lorem ipsum 
lorem ipsum lorem ipsum 
lorem ipsum 
lorem ipsum 
lorem ipsum lorem ipsum lorem ipsum `

const FullTask = () => {
	return (
		<section className={s.full_task}>
			<div className={s.full_task__container}>
				<h2>Задача #1</h2>
				<div >
					<p className={s.full_task__label}>
						Краткое описание
					</p>
					<div className={s.full_task__info}>
						{description}
					</div>					
					<NavLink onClick={()=> console.log(`backTo`)} to="/taskmanager" className={`${s.button} ${s.full_task__button}`}>
						Вернуться в список
					</NavLink>
				</div>				
			</div>
		</section>
	);
};

export default FullTask;
