import React from 'react';
import s from './task-manager.module.css';
import CreateTask from './create-task.jsx';
import Task from './task.jsx';
import FullTask from './full-task.jsx';

class TaskList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isShowingCreate: false,
    };

    this._toggleCreateHandler = this._toggleCreateHandler.bind(this);
  }

  _toggleCreateHandler(){
    this.setState({
      isShowingCreate: !this.state.isShowingCreate,
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
          <button onClick={this._toggleCreateHandler} className= {`${s.header__button} ${s.button} ${s.button__add}`}>Добавить</button>
        </div>
        <div className = {s.tasks__container}>
          <ul className={s.tasks__list}>
            {tasks.map((task, i)=> <Task key={task.id} id={task.id} title={task.title} isShowingCreate = {this.state.isShowingCreate}/>)}
          </ul>
        </div>
        {this.state.isShowingCreate && <CreateTask currentId = {currentId} toggleClickHandler = {this._toggleCreateHandler}/>}
        <FullTask/>
      </section>		
    );
  }
}

export default TaskList;
