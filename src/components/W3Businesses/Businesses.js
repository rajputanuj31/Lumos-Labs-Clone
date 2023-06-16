import React from 'react'
import bus1 from "../../asset/Businesses1.png"
import bus2 from "../../asset/Businesses2.png"
import bus3 from "../../asset/Businesses3.png"
import bus4 from "../../asset/Businesses4.png"
import bus5 from "../../asset/Businesses5.png"
import bus from "../../asset/Businesses.png"

const Businesses = () => {
    return (
        <div className='businesses'>
            <div className="e-second">
                <div className="e-right">
                    <img src={bus} alt="" />
                </div>
                <div className="e-left">
                    <h2>Web3 BUSINESSES</h2>
                    <div className="builders">
                        <div className="detail">
                            <img src={bus1} alt="" />
                            <p>Set up virtual headquarters and reach a vast developer community</p>
                        </div>
                        <div className="detail">
                            <img src={bus2} alt="" />
                            <p>Simplify access to ecosystem opportunities to nurture your community</p>
                        </div>
                        <div className="detail">
                            <img src={bus3} alt="" />
                            <p>Elevate your brand with multiple immersive and experiential options</p>
                        </div>
                        <div className="detail">
                            <img src={bus4} alt="" />
                            <p>Host community activities and events with unique brand-specific customisations</p>
                        </div>
                        <div className="detail">
                            <img src={bus5} alt="" />
                            <p>Seamlessly connect with developer talent to train, collaborate with and hire</p>
                        </div>
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Businesses
