import React from "react";
import "./Works.css";
import wordPress from "../../assets/images/wordPress.png";
import js from "../../assets/images/js.png";
import PHPlogo from "../../assets/images/PHPlogo.png";
import tags from "../../assets/images/tags.png";
import mySQL from "../../assets/images/mySQL.png";
import node from "../../assets/images/node.png";
import pngreact from "../../assets/images/pngreact.png";
import mongodb from "../../assets/images/mongodb.png";
import LARAVEL from "../../assets/images/LARAVEL.jpeg"
// import { themeContext } from "../../assets/Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';
const Works = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="Works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span >
            My Skills 
          </span>
          <span>Front-End & Back-End</span>
          <ul>
            <li>
          <ul style={{listStyleType: 'none'}}>
            <li>
              <strong>
            Front-End:
            </strong>
            </li>
            <li>
            React / React-Native
            </li>
            <li>
            JavaScript
            </li>
            <li>
            HTML
            </li>
            <li>
            CSS
            </li>
            <li>
            Bootstrap / MUI
            </li>
        </ul>
        </li>
        <br />
        <li>
        <ul style={{listStyleType: 'none'}}>
            <li>
            <strong>

            Back-End:
            </strong>
            </li>
            <li>
            Nodejs
            </li>
            <li>
            Express
            </li>
            <li>
            Php
            </li>
            <li>
            Laravel
            </li>
        </ul>
        </li>
        <br />
        <li>
        <ul style={{listStyleType: 'none'}}>
            <li>
            <strong>

            Databases:
            </strong>
            </li>
            <li>
            MongoDB
            </li>
            <li>
            MySQL
            </li>
        </ul>
        </li>
        </ul>
          <Link to="Contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right w-mainCircle">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3 }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={wordPress} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={tags} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={mySQL} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={PHPlogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={pngreact} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={LARAVEL} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongodb} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        {/* <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div> */}
      </div>
    </div>
  );
};

export default Works;