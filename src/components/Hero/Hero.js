import React from 'react'
import "./Hero.css"
import heroimg from "../../asset/HeroBackground.png"
import {BsDiscord} from "react-icons/bs"
import {FiArrowUpRight} from "react-icons/fi"
import Textanimation from '../Animation/Textanimation'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left">
        <div className="text">
            <h1>
                A world for developers
                <br />
                to <Textanimation/>
                <br />
                in the Web3 Ecosystem 
            </h1>
        </div>
        <div className="community">
            <p>Be a part of the Lumos Metaverse Community</p>
            <br />
            <div className="combtn">
                <a href=" ">
                      <BsDiscord size={20}/>
                      <span>JOIN NOW</span>
                </a>
                <a href=" ">
                    <span>JOIN THE WHITELIST</span>
                    <FiArrowUpRight/>
                </a>
            </div>
        </div>

      </div>
      <div className="right">
         <img src={heroimg} className='background' alt="" />
      </div>
    </div>
  )
}

export default Hero
