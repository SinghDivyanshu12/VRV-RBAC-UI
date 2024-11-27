import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <Navbar />
      <div className="flex justify-center items-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Welcome to the Admin Dashboard
          </h1>
          <p className="text-lg font-medium mb-8">
            Manage everything effortlessly with our intuitive admin interface.
          </p>
          {/* <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
            
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
