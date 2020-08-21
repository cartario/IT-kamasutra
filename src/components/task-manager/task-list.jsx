import React from 'react';
import s from './task-manager.module.css';
import CreateTask from './create-task.jsx';
import Task from './task.jsx';
import FullTask from './full-task.jsx';
import DeleteTask from './delete-task.jsx';
import withActiveTask from './withActiveTask.js';
import withToggle from './withToggle.js';

const TaskList = (props) => {
  const {tasks, activeTask, isErrorPost, isAdding, isDeleting, statusCard,
    setActiveTask, toggleCreateHandler, toggleFullHandler, toggleDeleteHandler, toggleHandler} = props;

  const isDisabled = (statusCard.isShowingCreate || statusCard.isShowingFull || statusCard.isShowingDelete);

  return (
    <section className={`${s.taskmanager} ${s.tasks}`}>
      <div className={`${s.tasks__header} ${s.header}`}>
        <h1 className={s.header__title}>Список задач</h1>
        <button 
          onClick={toggleCreateHandler} 
          className= {`${s.header__button} ${s.button} ${s.button__add}`}
          disabled ={isDisabled}
        >Добавить</button>
      </div>
      <div className = {s.tasks__container}>
        {isErrorPost && <p className = {s.error}>Проверьте подключение интернета</p>}
        {isAdding && <p className={`${s.status} ${s.status_adding}`}>loading...</p>}
        {isDeleting && <p className={`${s.status} ${s.status_deleting}`}>deleting...</p>}
        {tasks.length ? ``: <p>Ура! Все задачи выполнены!!!!!!</p>}
        <ul className={s.tasks__list}>
          {tasks.map((task)=> <Task 
          key={task.id} 
          id={task.id} title={task.title}            
          setActiveTask = {setActiveTask}
          isDisabled = {isDisabled}
          toggleFullHandler = {toggleFullHandler}
          toggleDeleteHandler = {toggleDeleteHandler}            
          />)}
        </ul>
      </div>
      {statusCard.isShowingCreate && <CreateTask toggleClickHandler = {toggleCreateHandler}/>}
      {statusCard.isShowingFull && <FullTask activeTask = {activeTask} toggleFullHandler = {toggleFullHandler}/>}
      {statusCard.isShowingDelete && <DeleteTask activeTask = {activeTask} toggleDeleteHandler = {toggleDeleteHandler}/>}
    </section>)
};

export default withActiveTask(withToggle(TaskList));
