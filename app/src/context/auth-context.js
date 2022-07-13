import React, { createContext, useContext, useEffect, useState } from "react";

import * as logInApi from "../services/login-api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: "",
  });
  const [error, setError] = useState(false);

  function login(user) {
    logInApi
      .set(user)
      .then((resp) => {
        console.log(resp);
        setAuthState({
          isAuthenticated: true,
          token: resp.data.token,
        });
        localStorage.setItem("token", resp.data.token);
      })
      .catch((err) => setError(true));
  }

  function logout() {
    localStorage.removeItem("token");
    setAuthState({
      isAuthenticated: false,
      token: "",
    });
  }
  useEffect(() => {
    localStorage.getItem("token") &&
      setAuthState({
        isAuthenticated: true,
        token: localStorage.getItem("token"),
      });
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authState, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
