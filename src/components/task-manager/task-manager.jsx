import React from 'react';
import s from './task-manager.module.css';
import {NavLink} from 'react-router-dom';
import CreateTask from './create-task.jsx';
import {connect} from 'react-redux';

const isErr = false;
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

const Task = (props) => {
	const {id, title} = props;
	return (
	<>
		<li onClick={()=> console.log(`taskClicked`)} className={`${s.tasks__item} ${s.item}`}>
		<span className={s.item__name}>Задача №{id}</span>
		<span className={s.item__description}>{title}</span>
			<div className={s.item__controls}>
				<div>
					<a onClick={()=> console.log(`yo1`)} href="#1" className={`${s.item__link} ${s.item__link__edit}`}>
					</a>
				</div>
				<div>
					<a onClick={()=> console.log(`yo2`)} href="#2" className={`${s.item__link} ${s.item__link__delete}`}></a>
				</div>
			</div>
		</li>			
	</>
	);
};

const TaskList = (props) => {
	const {tasks} = props;
	return (
		<section className={`${s.taskmanager} ${s.tasks}`}>
			<div className={`${s.tasks__header} ${s.header}`}>
				<h1 className={s.header__title}>Список задач</h1>
				<button onClick={()=> console.log(`adding`)} className= {`${s.header__button} ${s.button} ${s.button__add}`}>Добавить</button>
			</div>
			<div className = {s.tasks__container}>
				<ul className={s.tasks__list}>
					{tasks.map((task, i)=> <Task key={task.id} id={task.id} title={task.title}/>)}
				</ul>
			</div>
			<CreateTask/>
			<FullTask/>
		</section>		
	);
};

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
