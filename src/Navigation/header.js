import Logo from '../Images/favicon.png';
import { FaBars, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Header.css'
import { useState } from 'react';

function Nav() {
    const [content, setContent] = useState(false)

    // const [showContent, setShowContent] = useState(false);
    const shownav = () => {
            if(content)
            {
                document.getElementById('content').classList.add('d-none')
                document.getElementById('content').classList.remove('d-flex')
                setContent(!content)
            }
            else
            {
                document.getElementById('content').classList.add('d-flex')
                document.getElementById('content').classList.remove('d-none')
                setContent(!content)
            }
    }


    return (
        <>
            <header id="text" className="w-full fixed" style={{ zIndex: "3" }}>
                <div className="hidden md:block w-full bg-[#0b3d77]">
                    <div className="w-4/5 m-auto bg-transparent">
                        <div className="justify-end h-10 gap-3 flex text-white font-medium items-center">
                            <div>
                                Socials |
                            </div>
                            <a href='#'>
                                <FaFacebook />
                            </a>
                            <a href='#'>
                                <FaTwitter />
                            </a>
                            <a href='#'>
                                <FaInstagram />
                            </a>
                            <a href='#'>
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[rgba(21,84,154)]">
                    <div className=" md:w-4/5 m-auto bg-transparent flex justify-between">
                        <div className="h-12 my-2 md:flex justify-between items-center w-full">
                            <div className="flex px-3 justify-between ">
                                <NavLink to="/">
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        className="h-12 md:h-10"
                                    />
                                </NavLink>
                                <div className="md:hidden text-white h-full">
                                    <button onClick={() => shownav()} className="h-full px-3 py-2 text-lg border border-white rounded"><FaBars /></button>
                                </div>
                            </div>
                            {
                                content ? 
                                ''
                                :
                            <div className="md:flex hidden text-white p-4" >
                                <NavLink to='/'>
                                    <button className="px-4 h-full">Home </button>
                                    <div className="line"></div>
                                </NavLink>
                                <NavLink to="/Blog">
                                    <button className="px-4 h-full">Our Blog </button>
                                    <div className="line"></div>
                                </NavLink>
                                <NavLink to='/About'>
                                    <button className="px-4 h-full">About Us </button>
                                    <div className="line"></div>
                                </NavLink>
                                <NavLink to="/Contactus">
                                    <button className="px-4 h-full">Contact Us </button>
                                    <div className="line"></div>
                                </NavLink>
                            </div>
                            }

                            <div id="content" className="d-none p-4 myNAv">
                                <NavLink to='/'>
                                    <button className="px-4 h-full">Home </button>
                                    <div className="line"></div>
                                </NavLink>
                                <NavLink to="/Blog">
                                    <button className="px-4 h-full">Our Blog </button>
                                    <div className="line"></div>
                                </NavLink>
                                <NavLink to='/About'>
                                    <button className="px-4 h-full">About Us </button>
                                    <div className="line"></div>
                                </NavLink>
                                <NavLink to="/Contactus">
                                    <button className="px-4 h-full">Contact Us </button>
                                    <div className="line"></div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
        </>
    )
}

export default Nav;