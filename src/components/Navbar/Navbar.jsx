import React from "react";
// import Toggle from "../Toggle/Toggle";
import './Navbar.css';
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Carol</div>
                {/* <Toggle /> */}
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>
                        <Link to="Navbar" activeClass="active" smooth={true} spy={true}>
                        Home
                        </Link>
                        </li>
                        <li>
                        <Link to="Works" smooth={true} spy={true}>
                        Works
                        </Link>
                        </li>
                        {/* <li>
                        <Link to="Experience" smooth={true} spy={true}>
                        Experience
                        </Link>
                        </li> */}
                        <li>
                        <Link to="Portfolio" smooth={true} spy={true}>
                        Portfolio
                        </Link>
                        </li>
                        {/* <li>
                        <Link to="Testimonials" smooth={true} spy={true}>
                        Testimonials
                        </Link>
                        </li> */}
                    </ul>
                </div>
                <Link to="Contact" smooth={true} spy={true}>
                <button className="button n-button">
                    Contact
                </button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar