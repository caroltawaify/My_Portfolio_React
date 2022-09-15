import React from "react";
import "./Footer.css";
import Wave from "../../assets/images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>carol.tawaify96@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/caroltawaify?igshid=YmMyMTA2M2Y=">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010829250152">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/caroltawaify">
          <Github color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;