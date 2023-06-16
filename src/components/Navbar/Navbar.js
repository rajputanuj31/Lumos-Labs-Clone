import React,{useState} from 'react'
import "./Navbar.css"
import logo1 from "../../asset/logo.png"
import { BsDiscord } from "react-icons/bs"
import { FiArrowUpRight } from "react-icons/fi"
import { FaBars,FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click)
  return (
    <div className='Nav'>
      <img src={logo1} alt="" />
      <div className={click ? "NavMenu active" : "NavMenu"}>
        <a href=" ">
          <li>
            Home
          </li>
        </a>
        <a href=" ">
          <li>
            BUIDLers
          </li>
        </a>
        <a href=" ">
          <li>
            BUSINESSES
          </li>
        </a>
        <a href=" ">
          <li>
            COMMUNITIES
          </li>
        </a>
        <a href=" ">
          <li>
            METAVERSE
          </li>
        </a>
        <a href=" ">
          <li>
            ABOUT
          </li>
        </a>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {
          click ? (<FaTimes />): (<FaBars />)
        }
      </div>
      <div className='combtn btn'>
        <a href=" ">
          <BsDiscord size={20} />
        </a>
        <a href=" ">
          <span>WHITELIST</span>
          <FiArrowUpRight />
        </a>
      </div>
    </div>
  )
}

export default Navbar
