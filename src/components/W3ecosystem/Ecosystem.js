import React from 'react'
import "./Ecosystem.css"
import img1 from "../../asset/1.png"
import img2 from "../../asset/2.png"
import img3 from "../../asset/3.png"
import img4 from "../../asset/4.png"
import img5 from "../../asset/5.png"
import eco from "../../asset/eco.png"


const Ecosyestem = () => {
  return (
    <div className='eco'>
      <div className="e-first">
          <h1>A metaverse of opportunities</h1>
          <h1>for the 
          <span>Web3 ecosystem</span>
          </h1>
      </div>
      <div className="e-second">
        <div className="e-left">
            <h2>BUIDLers</h2>
            <div className="builders">
               <div className="detail">
                <img src={img1} alt="" />
                <p>Find learning, earning and job opportunities, all in one place</p>
               </div>
               <div className="detail">
                <img src={img2} alt="" />
                <p>Sport über cool, futuristic looks with customisable Digital Avatars</p>
               </div>
               <div className="detail">
                <img src={img3} alt="" />
                <p>Build your resume to showcase your skills and professional experience</p>
               </div>
               <div className="detail">
                <img src={img4} alt="" />
                <p>Find your tribe and grow your networks</p>
               </div>
               <div className="detail">
                <img src={img5} alt="" />
                <p>Meet Web3’s biggest names for exclusive one-on-ones</p>
               </div>
               <button>LEARN MORE</button>
            </div>
        </div>
        <div className="e-right">
           <img src={eco} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ecosyestem
