import Logo from '../Images/ICTAZ CBU LOGO.png';
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Uq(){

    // const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        // setShowContent(!showContent);
        document.getElementById('content').classList.toggle("hidden");
    };

    

    return(
        <>
            <header id="text" className="w-full fixed" style = {{zIndex: "3"}}>
                <div className="hidden md:block w-full bg-[#0b3d77]">
                    <div className="w-4/5 m-auto bg-transparent">
                        <ul className="justify-end flex text-white font-medium">
                            <li className="px-4 py-2">ICTAZ Home</li>
                            <li className="px-4 py-2">Events</li>
                            <li className="px-4 py-2">Give</li>
                            <li className="px-4 py-2">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-[rgba(21,84,154)]">
                    <div className="w-11/12 md:w-4/5 m-auto bg-transparent flex justify-between">
                        <div className="h-12 md:h-20 my-2 flex justify-between items-center w-full">
                            <div className="">
                                <img 
                                    src = { Logo }
                                    alt = "Logo"
                                    className="h-12 md:h-20"
                                />
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
                                <button className="h-full px-3 text-lg border border-white rounded"><FaBars/></button>
                            </div>                            
                        </div>                        
                    </div>
                </div>
                
            </header>
        </>
    )
}

export default Uq;