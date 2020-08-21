import React from 'react';
import s from './task-manager.module.css';
import {Toggles} from './name-space.js';

class Task extends React.Component{

  _removeClickHandler() {    
    this.props.toggleHandler(Toggles.DELETE);

    this.props.setActiveTask(
      {id: this.props.id,
        title: this.props.title,      
      });
  }

  _editClickHandler() {
    this.props.toggleHandler(Toggles.EDIT);    
    this.props.setActiveTask(
      {id: this.props.id,
        title: this.props.title,      
      });
  }

  render(){
    const {id, title, isDisabled} = this.props;    
    
    return (
      <>      
        <li className={`${s.tasks__item} ${s.item}`}>
        <span className={s.item__name}>Задача №{id}</span>
        <span className={s.item__description}>{title}</span>
          <div className={s.item__controls}>
            <div>
              <button
                onClick={() => {this._editClickHandler()}}
                className={`${s.item__link} ${s.item__link__edit}`}
                disabled = {isDisabled}>
              </button>
            </div>
            <div>
              <button
                onClick={() => {this._removeClickHandler()}}
                className={`${s.item__link} ${s.item__link__delete}`}
                disabled = {isDisabled}>
              </button>
            </div>
          </div>          
        </li>			
      </>
      );
  }
}

export default Task;
