
import React, {useState} from 'react'
import './Places&footer.css' 
import list from './List'

function Places() {
    //const [menu, setMenu] = useState([])
    //setMenu = 
    return (
        <div className="places">
            <h1>Visit this epic places</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card"> 
                        <img src="/OBT/images/Sundarban.jpg" class="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">Sundarban</h5>
                            <p className="card-text">3 Nights & 4 Days</p>
                            <p className="card-price">From 4000 per person</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/OBT/images/Sandakphu.jpg" class="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">Sandakphu</h5>
                            <p className="card-text">6 Night & 7 Days</p>
                            <p className="card-price">From 6000 per person</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/OBT/images/lepchajagat.jpg" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Lepchajagat</h5>
                            <p className="card-text">4 Night & 5 Days</p>
                            <p className="card-price">From 6000 per person</p>
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card">
                        <img src="/OBT/images/Mousuni.jpg" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mousuni island</h5>
                            <p className="card-text">2 Night & 3 Days</p>
                            <p className="card-price">From 5000 per person</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/OBT/images/Ahaldara.jpeg" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ahaldara</h5>
                            <p className="card-text">4 Night & 5 Days</p>
                            <p className="card-price">From 6000 per person</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/OBT/images/mawryngkhang.jpg" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mawryngkhang</h5>
                            <p className="card-text">5 Night & 6 Days</p>
                            <p className="card-price">From 7000 per person</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/OBT/images/todey.jpg" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Todey Tangta</h5>
                            <p className="card-text">4 Night & 5 Days</p>
                            <p className="card-price">From 6000 per person</p>
                        </div>
                    </div>
                </div>
            
                <div className="col">
                    <div className="card">
                        <img src="/OBT/images/saryuvalley.jpg" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Saryu Valley </h5>
                            <p className="card-text">4 Night & 5 Days</p>
                            <p className="card-price">From 8500 per person</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Places
