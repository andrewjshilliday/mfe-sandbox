import React from 'react';
import { Provider } from 'react-redux';
import Footer from './features/footer/Footer';
import Header from './features/header/Header';
import TodoList from './features/todos/TodoList';
import { fetchTodos } from './features/todos/todoSlice';
import store from './store';
import styles from './App.module.scss';

store.dispatch(fetchTodos());

const App = () => {
  console.log('app2');
  
  return (
    <Provider store={store}>
      <div className={styles.app2}>
        <h2 className={styles.header}>App 2</h2>
        <hr />
        <main>
          <section>
            <h2>Todos</h2>
            <div className={styles.todoapp}>
              <Header />
              <TodoList />
              <Footer />
            </div>
          </section>
        </main>
      </div>
    </Provider>
  );
};

export default App;
