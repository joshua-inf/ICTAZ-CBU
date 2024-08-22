import Logo from '../Images/ICTAZ CBU LOGO.png';
import { FaBars, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    
        document.getElementById('content').classList.toggle('hidden');
    };

    

    return(
        <>
            <header id="text" className="w-full fixed" style = {{zIndex: "3"}}>
                <div className="hidden md:block w-full bg-[#0b3d77]">
                    <div className="w-4/5 m-auto bg-transparent">
                        <ul className="justify-end flex text-white font-medium items-center">
                            <li className="px-4 py-2">+260 977885462</li>
                            <li className="px-2 py-2"><FaFacebook/></li>
                            <li className="px-2 py-2"><FaTwitter/></li>
                            <li className="px-2 py-2"><FaInstagram/></li>
                            <li className="px-2 py-2"><FaEnvelope/></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-[rgba(21,84,154)]">
                    <div className="w-11/12 md:w-4/5 m-auto bg-transparent flex justify-between">
                        <div className="h-12 md:h-20 my-2 flex justify-between items-center w-full">
                            <div className="">
                                <NavLink to="/">
                                    <img 
                                        src = { Logo }
                                        alt = "Logo"
                                        className="h-12 md:h-20"
                                    />
                                </NavLink>
                            </div>    
                            <div className="hidden md:block h-full">
                                <div className="flex justify-evenly text-white ml-3 h-full">
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
                            <div className="md:hidden text-white h-full">
                                <button className="h-full px-3 text-lg border border-white rounded" onClick={ () => toggleMenu() }><FaBars/></button>
                            </div>                            
                        </div>                        
                    </div>
                </div>
                <div className="hidden w-full h-full bg-[rgba(21,84,154)] border-t border-[#4089dd] duration-[5000ms]" style={{zIndex : "1"}} id="content">
                <div className="h-full">
                    <div className="text-white font-medium text-[22px]">
                        <NavLink to='/'>
                            <div className="py-4 w-full text-center">Home</div>
                        </NavLink>
                        <NavLink to="/Blog">
                            <div className="py-4 w-full text-center">Our Blog </div>
                        </NavLink>
                        <NavLink to='/About'>
                            <div className="py-4 w-full text-center">About Us </div>                                
                        </NavLink>
                        <NavLink to="/Contactus">
                            <div className="py-4 w-full text-center">Contact Us </div>
                        </NavLink>                        
                        
                    </div>
                    <div className="w-full bg-[#0b3d77] bottom-0">
                        <div className="m-auto bg-transparent">
                            <ul className="flex justify-evenly text-white font-medium items-center text-[24px]">
                                {/* <li className="px-4 py-2">+260 977885462</li> */}
                                <li className="px-2 py-2"><FaFacebook/></li>
                                <li className="px-2 py-2"><FaTwitter/></li>
                                <li className="px-2 py-2"><FaInstagram/></li>
                                <li className="px-2 py-2"><FaEnvelope/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            </header>
            
        </>
    )
}

export default Nav;