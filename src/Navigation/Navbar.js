import { NavLink } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
// import image from '../Images/QWA LOGO.png'
import {FiMenu} from 'react-icons/fi'
import { useState } from "react"
import Logo from '../Images/ICTAZ CBU LOGO.png'

const Nav = () => {
    const [navs, setNav] = useState(false)

    const pushdown = () => {
        document.getElementById('nav-custom-link-drop').classList.toggle("show")
    }
    window.onclick = function(event) {
        if(!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementById('nav-custom-link-drop');
            var i; 
            for(i = 0; i < dropdowns.lengtt; i++) {
                var openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    // const changebg = () => {
    //     let navbar = document.getElementById('navbar-cust');
    //     let scrollValue = window.scrollY;
    //     if (scrollValue < 40) {
    //         navbar.classList.remove('navbar-cust');
    //     } else {
    //         navbar.classList.add('navbar-cust');
    //     }
    // }
    // window.addEventListener('scroll', changebg);
    return (
        <>
            <div className="navbar-custom shadow" style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: "3" }}>
                <div className="p-3 navbar-cust" id="navbar-cust">
                    <div className="" style={{ overflow: 'hidden' }}>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10 col-12">
                                <div className="fw-bold text-white">
                                    <div className="d-flex" style={{alignItems:'center'}}>
                                        <div className="d-none  nav-custom-links d-md-flex justify-content-between w-100"  style={{alignItems:'center'}}>
                                            <img width={100} src={Logo} />
                                            <div className="d-flex" style={{ gap: '20px' }}>
                                                <NavLink to='/'>
                                                    Home
                                                    <div className="line"></div>
                                                </NavLink>
                                                <NavLink to='/About'>
                                                    About Us
                                                    <div className="line"></div>
                                                </NavLink>
                                                <NavLink to='/Contactus'>
                                                    Contact Us
                                                    <div className="line"></div>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="d-md-none  w-100">
                                            <div className="d-flex justify-content-between" style={{alignItems:'center'}}>
                                                <h4>Logo</h4>
                                                <button onClick={() => pushdown()} className="btn dropbtn text-white "><FiMenu size={20} /></button>
                                            </div>
                                            <div className="nav-custom-link-drop" id="nav-custom-link-drop">
                                                <NavLink to='/'>
                                                    Home
                                                </NavLink>
                                                <NavLink to='/About'>
                                                    About Us
                                                </NavLink>
                                                <NavLink to='/Products&Services'>
                                                    Our Services
                                                </NavLink>
                                                <NavLink to='/Company Profile'>
                                                    Company Profile
                                                </NavLink>
                                                <NavLink to='/Contactus'>
                                                    Contact Us
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
                {/* <div style={{height:'5px'}} className="bg-danger"></div> */}
            </div>
        </>
    )
}

export default Nav