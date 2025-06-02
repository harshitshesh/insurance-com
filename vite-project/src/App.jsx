import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AgentDashboard from "./components/Agentdashboard";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="main">
        <nav className="navbar sticky">
          <Link to="/" className="navlink">Home</Link>
          <Link to="/profile" className="navlink">Profile</Link>
          <Link to="/agent" className="navlink">Agent Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/agent" element={<AgentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}