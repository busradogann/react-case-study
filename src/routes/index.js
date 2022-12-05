import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useLocalStorage } from '../hooks';

import Login from '../pages/Login/index';
import Dashboard from '../pages/Dashboard';


const ProtectedRoute = ({children }) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}