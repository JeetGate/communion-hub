import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <nav className="p-4 bg-blue-500 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/events">Events</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
