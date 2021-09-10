import React from 'react'
import Footer from './Footer'
import Places from './Places'
import Slides from './Slide'
import {Slidedata} from './Slidedata'

function Home() {
    return (
        <div>
            {/* <img src="/images/sandakphu.jpg" />
            <div className="home-container">
                
                <h1>Offbeat gives Peace</h1>
                <p>Explore the odds</p>
            </div> */}
            <Slides slides={Slidedata}/>
            <Places />
            <Footer />
        </div>
    )
}

export default Home;
