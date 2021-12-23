import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './lib/loginUtils';

const App = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');

  const doLogin = async (username, password) => {
    await login(username, password);
    navigate('/');
  };

  return (
    <>
      <h2>Login</h2>
      <label>Username</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <label>Password</label>
      <input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button type={'submit'} onClick={() => doLogin(username, password)}>Submit</button>
    </>
  );
};

export default App;
