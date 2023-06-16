import React from 'react'
import "./Footer.css"
import logo from "../../asset/FooterBackground.png"
import { FaFacebookF, FaInstagram, FaDiscord, FaLinkedinIn, FaTwitter, FaMediumM } from "react-icons/fa"
import { SiHackernoon } from "react-icons/si"
import logo2 from "../../asset/logo.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="f-main">
                <div className="line"></div>
                <div className="f-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="f-text">
                    <h1>
                        Stay updated with our
                        <br />
                        journey
                    </h1>
                </div>
                <div className="icons">
                    <a href=" ">
                        <FaFacebookF />
                    </a>
                    <a href=" ">
                        <FaLinkedinIn />
                    </a>
                    <a href=" ">
                        <FaDiscord />
                    </a>
                    <a href=" ">
                        <FaTwitter />
                    </a>
                    <a href=" ">
                        <FaInstagram />
                    </a>
                    <a href=" ">
                        <FaMediumM />
                    </a>
                    <a href=" ">
                        <SiHackernoon />
                    </a>
                </div>
                <div className="f-text2">
                    <h5>SIGN UP FOR OUR NEWSLETTER</h5>
                    <p>By entering your email you accept the <span>Terms & Conditions</span></p>
                </div>
                <div className="last">
                    <div className="last1">
                       <img src={logo2} alt="" />
                       <p>Lumos Labs is building a 
                        metaverse for builders and Web3 
                        ecosystem enablers to share opportunities 
                        to build and scale-up.
                        </p>
                    </div>
                    <div className="last2">
                       <a href=" ">About Us</a>
                       <a href=" ">Discord</a>
                    </div>
                </div>
                <div className="final-last">
                    <p>Have queries? Reach out to us on the email below!</p>
                    <a href=" ">corporate@lumoslabs.co</a>
                </div>
                <hr style={{width: "80%"}}/>
            </div>
        </div>
    )
}

export default Footer
