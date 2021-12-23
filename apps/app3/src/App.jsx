import React from "react";
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import Immutable from 'immutable';
import rootReducer from './reducers';
import Form from './components/Form/Form';

const composeEnhancers = composeWithDevTools({ name: 'app3' });

const store = createStore(
  rootReducer,
  Immutable.Map(),
  composeEnhancers()
);

export const getStore = () => store;

const App = () => {
  console.log('app3');

  return (
    <Provider store={store}>
      <div>
        <h2 style={{ margin: 0 }}>App 3</h2>
        <hr />
        <Form onSubmit={(values) => {
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        }} />
      </div>
    </Provider>
  );
};

export default App;
