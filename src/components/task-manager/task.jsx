import React from 'react';
import s from './task-manager.module.css';
import { connect } from 'react-redux';
import {ActionCreator} from '../../reducers/task-manager-reducer.js';

class Task extends React.Component{
  constructor(props){
    super(props);
  }

  _removeClickHandler() {    
    this.props.toggleDeleteHandler();

    this.props.setActiveTask(
      {id: this.props.id,
        title: this.props.title,      
      });
  }

  _editClickHandler() {
    this.props.toggleFullHandler();    
    this.props.setActiveTask(
      {id: this.props.id,
        title: this.props.title,      
      });
  }

  render(){
    const {id, title, isShowingCreate, isShowingFull, isShowingDelete, isDataReady} = this.props;
    
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
                disabled = {isShowingCreate || isShowingFull || isShowingDelete}>
              </button>
            </div>
            <div>
              <button
                onClick={() => {this._removeClickHandler()}}
                className={`${s.item__link} ${s.item__link__delete}`}
                disabled = {isShowingCreate || isShowingFull || isShowingDelete}>
              </button>
            </div>
          </div>          
        </li>			
      </>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  
})

export {Task};
export default connect(null, mapDispatchToProps)(Task);
