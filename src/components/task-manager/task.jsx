import React from 'react';
import s from './task-manager.module.css';
import { connect } from 'react-redux';
import {ActionCreator} from '../../reducers/task-manager-reducer.js';

class Task extends React.Component{
  constructor(props){
    super(props)

  }

  _removeClickHandler(id) {
    this.props.removeTask(id);
  }

  _editClickHandler(id) {
    this.props.toggleFullHandler();

    
    this.props.setActiveTask(
      {id: this.props.id,
        title: this.props.title,      
      });
  }

  render(){
    const {id, title, isShowingCreate, isShowingFull} = this.props;

    return (
      <>
        <li className={`${s.tasks__item} ${s.item}`}>
        <span className={s.item__name}>Задача №{id}</span>
        <span className={s.item__description}>{title}</span>
          <div className={s.item__controls}>
            <div>
              <button
                onClick={() => {this._editClickHandler(id)}}
                className={`${s.item__link} ${s.item__link__edit}`}
                disabled = {isShowingCreate || isShowingFull}>
              </button>
            </div>
            <div>
              <button
                onClick={() => {this._removeClickHandler(id)}}
                className={`${s.item__link} ${s.item__link__delete}`}
                disabled = {isShowingCreate || isShowingFull}>
              </button>
            </div>
          </div>
        </li>			
      </>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeTask(id) {
    dispatch(ActionCreator.removeTask(id))
  },
})

export {Task};
export default connect(null, mapDispatchToProps)(Task);
