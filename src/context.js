import React from 'react';

export const UserContext = React.createContext();

const UserContextProvier = ({ children }) => {
  const isLogin = localStorage.getItem('Token');
  <UserContext.Provider value={isLogin}>{children}</UserContext.Provider>;
};

export default UserContextProvier;
