import React from "react";
import horizonLogo from "../Assets/horizonLogo.png"

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
      </div>
        <div className="home-image">
        <div
  className="horizon-card d-flex flex-column align-items-start"
  style={{
    translate: "none",
    rotate: "none",
    scale: "none",
    opacity: 1,
    transform: "translate(0px, 0px)"
  }}
>
  <div className="heading">
    <div className="fs-4">FCC, IIT Hyderabad</div>
    <img
      className="horizon-logo "
      src={horizonLogo}
      alt=""
      width={60}
      height={50}
    />
  </div>
  <div className="horizon-title">
    <h1>Horizon</h1>
    {/* <img src="images/wifi.svg" alt="" width="50" height="50"> */}
  </div>  
  <div className="timer w-100">
    <div className="countdown-container ">
      <div className="days fs-4">
        <span id="days"> 00</span> <br />
        <span>days</span>
      </div>
      <div className="hours fs-4">
        <span id="hours"> 00</span> <br />
        <span>hrs</span>
      </div>
      <div className="minutes fs-4">
        <span id="minutes"> 00</span>
        <br /> <span>min</span>
      </div>
      <div className="seconds fs-4">
        <span id="seconds"> 00</span> <br />
        <span>sec</span>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        So,
Who are we?
        </h1>
        <p className="primary-text">
        The Finance and Consulting Club at IIT Hyderabad is a student-led organization fostering finance and consulting interests. At FCC IITH, students are driven by their passion for finance, consulting, product management and continual progress. Their dedicated team plans a variety of events, such as stimulating lectures, engaging workshops, impactful projects, rigorous competitions, and more, all geared toward achieving their mission of equipping students with useful skills and real-world knowledge in the finance, consulting, and product management domains.
        </p>
      </div>
    </div>
  );
};

export default About;
