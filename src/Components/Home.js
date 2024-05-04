import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import gifStocks from "../Assets/gifStocks.webp"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
      
        <div className="home-text-section">
          <h1 className="primary-heading">
          Finance and Consulting Club IIT Hyderabad
          </h1>
          <p className="primary-text">
          On A MISSION TO PROVE THAT ENGINEERS CAN DO NUMBERS
          </p>
          <button className="secondary-button">
            Horizon'24<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={gifStocks} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
