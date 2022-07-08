import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RequireAuth } from "./components/login/require-auth";
import useAuth from "./context/auth-context";

import Data from "./pages/data";
import LogIn from "./pages/login";
import ToDo from "./pages/todo";

function App() {
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    authState.isAuthenticated
      ? navigate("/todo", { replace: true })
      : navigate("/login", { replace: true });
  }, [authState.isAuthenticated]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/todo"
          element={
            <RequireAuth>
              <ToDo />
            </RequireAuth>
          }
        />
        <Route
          path="/data"
          element={
            <RequireAuth>
              <Data />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
