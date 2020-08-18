import React from 'react';
import s from './task-manager.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import CreateTask from './create-task.jsx';
import Task from './task.jsx';

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

const TaskList = (props) => {
	const {tasks} = props;	
	let currentId;
	tasks.length ? currentId = tasks[tasks.length - 1].id + 1: currentId = 1;
	
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
			<CreateTask currentId = {currentId}/>
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
