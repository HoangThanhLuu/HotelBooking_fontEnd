import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import ExistingRooms from "./components/room/ExistingRooms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRoom from "./components/room/AddRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/existing-rooms" element={<ExistingRooms />} />
        <Route path="/add-room" element={<AddRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
