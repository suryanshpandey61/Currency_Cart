import React from "react";
import "../../src/app/globals.css";
import Front from "./Front";
import Navbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <div className="">
      <Navbar />
     
        <Front />
      
    </div>
  );
};

export default Home;
