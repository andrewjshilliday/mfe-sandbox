import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TimesSolid from './times-solid.svg';
import { availableColors, capitalize } from '../filters/colors';
import {
  todoColorSelected,
  todoDeleted,
  todoToggled,
  selectTodoById,
} from './todoSlice';
import styles from '../../App.module.scss';

// Destructure `props.id`, since we just need the ID value
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const todo = useSelector((state) => selectTodoById(state, id))
  const { text, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch(todoToggled(todo.id))
  }

  const handleColorChanged = (e) => {
    const color = e.target.value
    dispatch(todoColorSelected(todo.id, color))
  }

  const onDelete = () => {
    dispatch(todoDeleted(todo.id))
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className={styles.view}>
        <div className={`${styles.segment} ${styles.label}`}>
          <input
            className={styles.toggle}
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className={styles['todo-text']}>{text}</div>
        </div>
        <div className={`${styles.segment} ${styles.buttons}`}>
          <select
            className={styles.colorPicker}
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className={styles.destroy} onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
