import React from 'react';
import PropTypes from "prop-types";
import s from '../style/task-manager.module.css';
import {Toggles} from '../name-space.js';

const Task = (props)=> {
  const {task, isDisabled, toggleHandler, setActiveTask} = props;  

  const removeClickHandler = () => {    
    toggleHandler(Toggles.DELETE);    
    setActiveTask({
        id: task.id,
        title: task.title,      
      });
  }

  const editClickHandler = ()=> {
    toggleHandler(Toggles.EDIT);    
    setActiveTask({
        id: task.id,
        title: task.title,      
      });
  }

  return (
    <>      
      <li className={`${s.tasks__item} ${s.item}`}>
      <span className={s.item__name}>Задача №{task.id}</span>
      <span className={s.item__description}>{task.title}</span>
        <div className={s.item__controls}>
          <div>
            <button
              onClick={editClickHandler}
              className={`${s.item__link} ${s.item__link__edit}`}
              disabled = {isDisabled}>
            </button>
          </div>
          <div>
            <button
              onClick={removeClickHandler}
              className={`${s.item__link} ${s.item__link__delete}`}
              disabled = {isDisabled}>
            </button>
          </div>
        </div>          
      </li>			
    </>
    );
};

Task.propTypes = {  
	task: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
	setActiveTask: PropTypes.func.isRequired,
  toggleHandler: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,	
};

export default Task;
