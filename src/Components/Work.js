import React from "react";
import financeFavicon from "../Assets/financeFavicon.jpeg"
import consultingFavicon from "../Assets/consultingFavicon.webp"
import productMangement from "../Assets/productManagement.png"
import Quant from "../Assets/Quant.png"
import stocks from "../Assets/stocks.jpeg"
import industiralWork from "../Assets/industrialWork.png"

const Work = () => {
  const workInfoData = [
    {
      image: financeFavicon,
      title: "Finance Sessions",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: consultingFavicon,
      title: "Consulting Sessions",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: productMangement,
      title: "Product Management",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: stocks ,
      title: "Stocks 101",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: industiralWork ,
      title: "Industry Projects",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Quant,
      title: "Decoding Quant",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },

  ];
  return (
   
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Sessions</p>
        <h1 className="primary-heading">What Do We Do?</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
           <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Work;
