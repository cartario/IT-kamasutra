import React from 'react';
import s from './task-manager.module.css';
import {NavLink} from 'react-router-dom';

const response = {
	data:[
		{id:101, title: "text101",},
		{id:102, title: "text102",},
		{id:103, title: "text103",},

	],
	length: 1,
	success: true,
	error: "",
};

const isErr = false;
const description = `lorem ipsum lorem ipsum 
lorem ipsum 
lorem ipsum lorem ipsum 
lorem ipsum 
lorem ipsum 
lorem ipsum lorem ipsum lorem ipsum `

class CreateTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: 1,
			text: ``,
		};

		this._submitHandler = this._submitHandler.bind(this);
		this._createTaskClickHandler = this._createTaskClickHandler.bind(this);
		this._closeTaskClickHandler = this._closeTaskClickHandler.bind(this);
		this._changeHandler = this._changeHandler.bind(this);
	}

	_submitHandler(e){
		e.preventDefault();

		
	}

	_createTaskClickHandler(){

	}

	_closeTaskClickHandler(){

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
						<button onClick={this._createTaskClickHandler} className={`${s.button} ${s.new_task__button}`} type="submit">
							Создать
						</button>
					</form>
					<button onClick={this._closeTaskClickHandler} className={s.new_task__button_close}></button>
				</div>
			</section>
		);
	}
};

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
	const {id} = props;
	return (
	<>
		<li onClick={()=> console.log(`taskClicked`)} className={`${s.tasks__item} ${s.item}`}>
		<span className={s.item__name}>Задача №{id}</span>
	<span className={s.item__description}>Описание {id}</span>
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

const TaskList = () => {
	return (
		<section className={`${s.taskmanager} ${s.tasks}`}>
			<div className={`${s.tasks__header} ${s.header}`}>
				<h1 className={s.header__title}>Список задач</h1>
				<button onClick={()=> console.log(`adding`)} className= {`${s.header__button} ${s.button} ${s.button__add}`}>Добавить</button>
			</div>
			<div className = {s.tasks__container}>
				<ul className={s.tasks__list}>
					{response.data.map((task, i)=> <Task key={task.id} id={task.id}/>)}
				</ul>
			</div>
			<CreateTask/>
			<FullTask/>
		</section>	
		
	);
};



const TaskManager = (props) => {
	return (
		<TaskList/>
	);
};

export default TaskManager;
