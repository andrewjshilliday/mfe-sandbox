import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todos/todoSlice'
import filtersReducer from './features/filters/filterSlice'

const store = configureStore({
  devTools: {
    name: 'app2'
  },
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer,
  },
})

export default store
