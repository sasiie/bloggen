import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  useEffect(() => {
    const initializeUser = (user) => {
      if (user) {
        setCurrentUser(user);
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, [auth]);
  const values = { currentUser, userLoggedIn };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
