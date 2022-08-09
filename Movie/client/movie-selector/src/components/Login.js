import React, { useState } from 'react';
import { Movies } from './Movies';

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [islogin, setIsLogin] = useState(false);

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, password: password }),
    });
    if (!response.ok) {
      alert('Something went wrong');
    }
    const data = await response.json();
    setIsLogin(data.logIn);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>UserName</label>
      <input type="text" onChange={userNameHandler} />
      <label>Password</label>
      <input type="text" onChange={passwordHandler} />
      <button type="submit">Submit</button>
      {islogin && <Movies username={userName} />}
    </form>
  );
};
