import React from 'react'
import "./Metaverse.css"
import metaimg from "../../asset/metaimg.png"

const Metaverse = () => {
    return (
        <div className='meta'>
            <div className="m-left">
                <img src={metaimg} alt="" />
            </div>
            <div className="m-right">
                <div className="heading">
                    <h2>Lumos Metaverse</h2>
                    <span>The BUIDLer’s gateway to Web3</span>
                </div>
                <div className="metatext">
                    <p>Since we started in 2018, we’ve been passionate about
                        perpetuating the #BUIDL culture to enable developers to become
                        BUIDLers - active stakeholders contributing to the Web3 ecosystem.
                    </p>
                    <p>We worked with note-worthy Web3 players like Polkadot, Binance,
                        NEAR, Polygon, the State Government of Telangana and more, to
                        conduct 50+ innovation programmes to encourage developers to BUIDL.
                    </p>
                    <p>Our efforts helped over 60,000 builders with a
                        collective US $10M through grants and prizes to
                        support their innovation journeys.
                    </p>
                </div>
                <button>LEARN MORE</button>
            </div>
        </div>
    )
}

export default Metaverse
