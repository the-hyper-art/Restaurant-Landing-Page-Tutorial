import React from "react";
import fccLogo from "../Assets/fccLogo.png"
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={fccLogo} alt="" />
          <p>FCC <br /> IIT Hyderabad</p>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <div className="footerFont">
            About Us
          </div>
          <br />
          <span>FCC Leadership
</span>
          <span>Blogs
</span>
          <span>Gallery
</span>
          <span>Contact Us</span>
        </div>

        <div className="footer-section-columns">
          <div className="footerFont">
            Contact
          </div>
          <br />
          <span>IIT Hyderabad, Sangareddy, <br /> Telangana, India - 502285</span>
          <span>fcc@gymkhanaiith.ac.in</span>
       
        </div>
        <div className="footer-section-columns">
          <span>© 2024 Copyright: FCC IIT Hyderabad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
