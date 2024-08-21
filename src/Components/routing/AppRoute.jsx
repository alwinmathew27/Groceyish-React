import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Login from "../Screens/authen/Login";
import Signup from "../Screens/authen/Signup";
export const UserContext = React.createContext();
function App() {
  const [userData, setUserData] = useState(null);
  const updateUserData = (action) => {
    switch (action.type) {
      case "LOGOUT":
        setUserData(null);
        localStorage.clear();
        break;
      case "LOGIN":
        setUserData(action.payload);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user_data"));
    if (storedUserData) setUserData(storedUserData);
  }, []);
  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/create" element={<Signup />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
