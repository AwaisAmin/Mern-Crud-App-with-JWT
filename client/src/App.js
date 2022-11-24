import { useState } from "react";
import "./App.css";
import AddUser from "./Components/AddUser";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditUser from "./Components/EditUser";
import GetUsers from "./Components/GetUsers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  // const user = localStorage.getItem("user");
  // const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <AddUser /> : <Navigate to="/login" />}
          />
          <Route
            path="/get"
            element={user ? <GetUsers /> : <Navigate to="/login" />}
          />
          <Route
            path="edit/:id"
            element={user ? <EditUser /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
