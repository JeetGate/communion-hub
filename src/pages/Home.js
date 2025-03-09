import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">
        Connecting People Across Faiths & Interests
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Connecting people of all faiths through events and community support.
      </p>
      <button
        onClick={() => navigate("/events")}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-700"
      >
        Explore Events
      </button>
    </div>
  );
};

export default Home;
