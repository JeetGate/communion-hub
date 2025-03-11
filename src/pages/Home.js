import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedButton from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6 bg-transparent text-white">
      <motion.h1
        className="text-5xl font-bold mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience Events Like Never Before
      </motion.h1>

      <motion.p
        className="text-lg text-gray-200 mb-6 max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Discover exciting events, make new connections, and experience unforgettable moments.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <AnimatedButton text="Join the Community" />
      </motion.div>

      <motion.button
        onClick={() => navigate("/events")}
        className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-lg text-lg shadow-lg hover:bg-blue-300 hover:text-white transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore Events
      </motion.button>
    </div>
  );
};

export default Home;
