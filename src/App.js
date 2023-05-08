import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import Login from "./Users/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const { activeMenu } = useStateContext();
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div>
      <BrowserRouter>
        {/* <div
          className="flex items-center justify-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <SignUp />
          </div>
        </div> */}

        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            {/* <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            /> */}

            <Route path="/" element={<Home />} />
            {/* Dashboard */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* Pages */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* App */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            {/* Charts */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
