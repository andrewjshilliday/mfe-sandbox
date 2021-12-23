import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'
import { selectFilteredTodoIds } from './todoSlice'
import styles from '../../App.module.scss';

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds)

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className={styles['todo-list']}>{renderedListItems}</ul>
}

export default TodoList
