import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import UndoRedo from './containers/UndoRedo';
import './App.scss';

const composeEnhancers = composeWithDevTools({ name: 'app1' });

const store = createStore(
  reducer,
  composeEnhancers()
);

const App = () => {
  console.log('app1');
  
  return (
    <Provider store={store}>
      <div className='app1'>
        <h2>App 1</h2>
        <hr />
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
          <UndoRedo />
        </div>
      </div>
    </Provider>
  );
};

export default App;
