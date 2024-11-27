import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { RoleProvider } from "./context/RoleContext";
import NavBar from "./components/Navbar"; // Import the NavBar component
import UsersPage from "./pages/UserPage"; // Import UsersPage
import RolesPage from "./pages/RolePage"; // Import RolesPage
import HomePage from "./pages/HomePage";
import './App.css';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <RoleProvider>
          <div >
            <NavBar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/roles" element={<RolesPage />} />
            </Routes>
          </div>
        </RoleProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
