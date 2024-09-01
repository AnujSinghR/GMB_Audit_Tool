import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './custom_components/AuthContext';
import Home from './custom_components/Home';
import Login from './custom_components/Login';
import SignUp from './custom_components/SignUp';
import Dashboard from './custom_components/Deshboard';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;