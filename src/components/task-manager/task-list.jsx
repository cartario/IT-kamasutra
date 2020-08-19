import React from 'react';
import s from './task-manager.module.css';
import CreateTask from './create-task.jsx';
import Task from './task.jsx';
import FullTask from './full-task.jsx';

class TaskList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      activeTask: null,
      isShowingCreate: false,
      isShowingFull: false,
    };

    this._toggleCreateHandler = this._toggleCreateHandler.bind(this);
    this._toggleFullHandler = this._toggleFullHandler.bind(this);
    this._setActiveTask = this._setActiveTask.bind(this);
  }

  _setActiveTask(task){
    this.setState({
      activeTask: task,
    })
  }

  _toggleCreateHandler(){
    this.setState({
      isShowingCreate: !this.state.isShowingCreate,
    })
  }

  _toggleFullHandler(){
    this.setState({
      isShowingFull: !this.state.isShowingFull,
    })
  }

  render(){
    const {tasks} = this.props;	
    let currentId;
    tasks.length ? currentId = tasks[tasks.length - 1].id + 1: currentId = 1;
    
    return (
      <section className={`${s.taskmanager} ${s.tasks}`}>
        <div className={`${s.tasks__header} ${s.header}`}>
          <h1 className={s.header__title}>Список задач</h1>
          <button 
            onClick={this._toggleCreateHandler} 
            className= {`${s.header__button} ${s.button} ${s.button__add}`}
            disabled ={this.state.isShowingFull || this.state.isShowingCreate}
          >Добавить</button>
        </div>
        <div className = {s.tasks__container}>
          <ul className={s.tasks__list}>
            {tasks.map((task, i)=> <Task 
            key={task.id} 
            id={task.id} title={task.title}
            setActiveTask = {this._setActiveTask}
            isShowingCreate = {this.state.isShowingCreate}
            isShowingFull = {this.state.isShowingFull}
            toggleFullHandler = {this._toggleFullHandler}
            />)}
          </ul>
        </div>
        {this.state.isShowingCreate && <CreateTask currentId = {currentId} toggleClickHandler = {this._toggleCreateHandler}/>}
        {this.state.isShowingFull && <FullTask activeTask = {this.state.activeTask} toggleFullHandler = {this._toggleFullHandler}/>}
        
      </section>		
    );
  }
}

export default TaskList;
