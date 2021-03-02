import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import UserContext from './UserContext';
import { FAKE_USER } from './api';
import './index.css';

const Root =()=> {

  const [user, setUser]=useState({
    currentUser: ""
  })

  const handleLogin = () => {
    setUser({ currentUser: FAKE_USER });
  };

  const handleLogout = () => {
    setUser({ currentUser: null });
  };

    return user.currentUser ? (
      <UserContext.Provider value={user.currentUser}>
        <MainPage onLogout={handleLogout} />
      </UserContext.Provider>
    ) : (
      <LoginPage onLogin={handleLogin} />
    );

}

ReactDOM.render(<Root />, document.querySelector('#root'));