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
    console.log(id)
  }

  render(){
    const {id, title} = this.props;
    return (
      <>
        <li className={`${s.tasks__item} ${s.item}`}>
        <span className={s.item__name}>Задача №{id}</span>
        <span className={s.item__description}>{title}</span>
          <div className={s.item__controls}>
            <div>
              <a onClick={() => {this._editClickHandler(id)}} href="#1" className={`${s.item__link} ${s.item__link__edit}`}>
              </a>
            </div>
            <div>
              <a onClick={() => {this._removeClickHandler(id)}} href="#2" className={`${s.item__link} ${s.item__link__delete}`}></a>
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
