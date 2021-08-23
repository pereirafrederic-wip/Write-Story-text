import React, { useEffect, useState } from 'react';
import { firebaseApp } from '../Firebase';

//2.
export const AuthContext = React.createContext(null);

//3.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
