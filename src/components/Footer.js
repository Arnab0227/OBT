import React from 'react'
import {Link} from 'react-router-dom'
import './Places&footer.css'

 
function Footer() {
    return (
        <div className="footer_container">
            <section className="subscription">
                <p className="subscription-heading">Join the OBT newsletter to receive our best vacation deals</p>
                <p className="unsubscribe-text">you can unsubscribe any time.</p>
                <div className="input-areas">
                    <forms>
                        <input type="email" className="footer-input" name="email"/>
                        <button className="btn">Subscribe</button>
                    </forms>
                </div>
            </section>
            <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/about'>About Us</Link>
                    <Link to='/about'>How it Works</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/contact'>support</Link>
                    <Link to='/contact'>contact</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/socialmedia'>Twitter</Link>
                    <Link to='/socialmedia'>Instagram</Link>

                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Footer 
