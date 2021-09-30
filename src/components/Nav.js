import React, {useState, useEffect} from 'react'

import { Link } from "react-router-dom"
import ExploreIcon from '@material-ui/icons/Explore'
import CloseIcon from '@material-ui/icons/Close'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'


function Nav(){

    const [show, setShow] = useState(false);

    return(
        <>
        <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Link to ='/' className="navbar-brand" >OBT</Link>
                <button className="navbar-toggler"
                 type="button"
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav"
                   aria-controls="navbarNav"
                    aria-expanded="false"
                     aria-label="Toggle navigation"
                     onClick={() => setShow(!show)}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to ='/' className="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" >Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="nav-link" tabindex="-1" aria-current="page">Login / Signup</Link>
                    </li>
                </ul>
                <span class="navbar-text"> Travel makes you Better
        
                </span>
                </div>
            </div>
        </nav>
        </section>
        </>
    )
}
//     const[click, setClick] = useState(false);
    

//     const handleClick = () => setClick(!click);
//     const closeMenu = () => setClick(false);
//     return(
//         <>
//             <nav className="navbar">
//                 <div className="navbar-container">
//                     <Link  className="navbar-icon" onClick={closeMenu}> OBT 
//                         <ExploreIcon />
//                     </Link>
//                     <div className="menu-icon" onClick={handleClick}>
//                         { click? <CloseIcon /> : <KeyboardArrowRightIcon />}
//                     </div>
//                     <ul className={click ? 'nav-menu active': 'nav-menu'}>
//                         <li className = 'nav-item'>
//                             <Link to='/'  className="nav-links" onClick={closeMenu} > Home </Link>
//                         </li>
//                         <li className = 'nav-item'>
//                             <Link to='/login'  className="nav-links"onClick={closeMenu} > Sign-in </Link>
//                         </li>
//                         <li className = 'nav-item'>
//                             <Link to='/register'  className="nav-links" onClick={closeMenu}> Register </Link>
//                         </li>
//                         <li className = 'nav-item'>
//                         <Link to='/tags' className="nav-link" onClick={closeMenu}> Categories</Link>
//                         </li>
//                         <li className = 'nav-item'>
//                         <Link to='/about' className="nav-link" onClick={closeMenu}> About Us</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </>
//     );
// }

export default Nav;