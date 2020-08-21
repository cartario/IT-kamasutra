import React from 'react';
import s from './task-manager.module.css';
import CreateTask from './create-task.jsx';
import Task from './task.jsx';
import FullTask from './full-task.jsx';
import DeleteTask from './delete-task.jsx';
import withActiveTask from './withActiveTask.js';

class TaskList extends React.Component{
  constructor(props){
    super(props);

    this.state = {      
      isShowingCreate: false,
      isShowingFull: false,
      isShowingDelete: false,
    };

    this._toggleCreateHandler = this._toggleCreateHandler.bind(this);
    this._toggleFullHandler = this._toggleFullHandler.bind(this);
    this._toggleDeleteHandler = this._toggleDeleteHandler.bind(this);    
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

  _toggleDeleteHandler(){
    this.setState({
      isShowingDelete: !this.state.isShowingDelete,
    })
  }

  render(){
    const {tasks, isErrorPost, isAdding, isDeleting} = this.props;    
    const isDisabled = (this.state.isShowingCreate || this.state.isShowingFull || this.state.isShowingDelete);
    
    return (
      <section className={`${s.taskmanager} ${s.tasks}`}>
        <div className={`${s.tasks__header} ${s.header}`}>
          <h1 className={s.header__title}>Список задач</h1>
          <button 
            onClick={this._toggleCreateHandler} 
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
            setActiveTask = {this.props.setActiveTask}
            isDisabled = {isDisabled}
            toggleFullHandler = {this._toggleFullHandler}
            toggleDeleteHandler = {this._toggleDeleteHandler}            
            />)}
          </ul>
        </div>
        {this.state.isShowingCreate && <CreateTask toggleClickHandler = {this._toggleCreateHandler}/>}
        {this.state.isShowingFull && <FullTask activeTask = {this.props.activeTask} toggleFullHandler = {this._toggleFullHandler}/>}
        {this.state.isShowingDelete && <DeleteTask activeTask = {this.props.activeTask} toggleDeleteHandler = {this._toggleDeleteHandler}/>}
      </section>		
    );
  }
}

export default withActiveTask(TaskList);
