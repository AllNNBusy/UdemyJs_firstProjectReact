import { Component } from 'react';

import './employees-list-item.css'

class EmployeesListItem extends Component {

  validation = (e) => {
    e.target.value = e.target.value.match(/\d+/g) + '$';
    e.target.value = e.target.value.split(',').join('');
    if (e.target.value === 'null$') {
      e.target.value = '$'
    }
    this.props.changeSalary(e)
  }

  render() {
    const {name, salary, onDelete, onToggleProp, increase, rise} = this.props;

    let classNames = "list-group-item d-flex justify-content-between"

    if (increase) {
      classNames += ' increase';
    }
    if (rise) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label"
          data-toggle="rise"
          onClick={onToggleProp}>{name}</span>

        <input type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
          onChange={this.validation}/>

        <div className="d-flex justify-content-center align-item-center">
          <button type="button"
            className="btn-cookie btn-sm"
            data-toggle="increase"
            onClick={onToggleProp}><i className="fas fa-cookie"/>
          </button>

          <button type="button"
            className="btn-trash btn-sm"
            onClick={onDelete}><i className="fas fa-trash"/>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default EmployeesListItem;