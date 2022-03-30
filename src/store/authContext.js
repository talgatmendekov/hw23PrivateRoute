import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const authContext = React.createContext({
  email: '',
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState();


   const getNameValueHandler = (userName) => {
    setName(userName)
  }



  useEffect(() => {
    const initialToken = localStorage.getItem('@token-onine-store');
    setToken(initialToken);
  }, []);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('@token-onine-store', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('@token-onine-store');
  };

  const contextValue = {
    name: name,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    getName: getNameValueHandler,
  };

  return <authContext.Provider value={contextValue}>{props.children}</authContext.Provider>;
};
