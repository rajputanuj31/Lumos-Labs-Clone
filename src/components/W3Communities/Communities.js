import React from 'react'
import communityImage from "../../asset/CommunityImage.png"
import com1 from "../../asset/com_1.png"
import com2 from "../../asset/com_2.png"
import com3 from "../../asset/com_3.png"
import com4 from "../../asset/com_4.png"
import com5 from "../../asset/com_5.png"
import com6 from "../../asset/com_6.png"
const Communities = () => {
  return (
    <div className='communities'>
      <div className="e-second">
        <div className="e-left">
            <h2>Web3 Communities</h2>
            <div className="builders">
               <div className="detail">
                <img src={com1} alt="" />
                <p>Find learning, earning and job opportunities, all in one place</p>
               </div>
               <div className="detail">
                <img src={com2} alt="" />
                <p>Sport über cool, futuristic looks with customisable Digital Avatars</p>
               </div>
               <div className="detail">
                <img src={com3} alt="" />
                <p>Build your resume to showcase your skills and professional experience</p>
               </div>
               <div className="detail">
                <img src={com4} alt="" />
                <p>Find your tribe and grow your networks</p>
               </div>
               <div className="detail">
                <img src={com5} alt="" />
                <p>Meet Web3’s biggest names for exclusive one-on-ones</p>
               </div>
               <div className="detail">
                <img src={com6} alt="" />
                <p>Meet Web3’s biggest names for exclusive one-on-ones</p>
               </div>
               <button>LEARN MORE</button>
            </div>
        </div>
        <div className="e-right">
           <img src={communityImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Communities
