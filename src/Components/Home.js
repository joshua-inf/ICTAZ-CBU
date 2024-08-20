import Carousel from "./HomeComp/Carasel"
import { FaArrowRight, FaHandsPraying } from "react-icons/fa6";
import { BsFillMortarboardFill } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import image from '../Images/3837.jpg'
import './Home.css'
import image1 from '../Images/robots.jpg'
import image3 from '../Images/5668.jpg'
import image2 from '../Images/138060.jpg'
import image4 from '../Images/90811.jpg'
import { useState } from "react";

const Home = () => {
    const [color, setColor] = useState(false)

    const CardComp = (props) => {
        return (
            <>
                <div className='col-12 col-md-4 p-2' >
                    <div className="text-center p-2 rounded-2 cardcomp border" style={{ cursor:'pointer'}}>
                        {props.Icon}
                        <h4 className="text-center">{props.Title}</h4>
                        <p className="text-center" style={{fontSize:'12px'}}>
                            {props.Content}
                        </p>
                        <div className="">
                        <FaArrowRight className="arrow" size={30}  />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const Card2Comp = (props) => {
        return (
            <>
                <div className="p-2">
                    <div className="rounded border-danger p-1" style={{ width: '250px', backgroundColor: 'rgba(255,255,255,0.5)' }}>
                        <div className="fw-bold fs-5 my-3 text-center">
                            {props.Title}
                        </div>
                        <p className="text-center" style={{fontSize:'12px'}}>
                            {props.Content}
                        </p>
                        <div className="text-center">
                            <button className="btn rounded-0 btn-outline-secondary">Read More</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const Card3Comp = (props) => {
        return(
            <>
                 <div style={{cursor:'pointer'}}>
                                    <div style={{width:'300px', height:'200px',  background: `url(${props.Image}) center no-repeat `, backgroundSize: 'cover'}} className="rounded-4 bg-dark">
                                    </div>
                                    <i className="fw-light" style={{fontSize:'12px'}}>20/05/2024</i>
                                    <div className=" h6">
                                        {props.Text.substring(24,0) + "..."}
                                        <button className="btn rounded-0 mx-3 btn-outline-dark">Read more</button>
                                    </div>
                                </div>
            </>
        )
    }
    return (
        <>
            <div style={{ minHeight: "100vh", marginTop: '60px' }}>
                <Carousel />
                <div className="d-flex " style={{paddingBlock:'50px', alignItems: 'center'}}>
                    <div className="p-4">
                        <div className="row">
                            <div className="col-1">
                            </div>
                            <div className="col-12 col-md-10">
                                <div className="row">
                                    <CardComp
                                        Icon={<BsFillMortarboardFill size={80} />}
                                        Content="We prioritize continuous learning and skill development in the rapidly evolving field of technology through workshops and seminars"
                                        Title='Education'
                                    />
                                    <CardComp
                                        Icon={<FaHandsPraying size={80} />}
                                        Content="We foster teamwork and mutual support among members to achieve shared goals and create impactful projects"
                                        Title="Collaboration"
                                    />
                                    <CardComp
                                        Icon={<TbBulb size={80} />}
                                        Content="We embrace cutting-edge ideas and technologies to drive progress and creativity."
                                        Title="Innovation"
                                    />
                                </div>
                            </div>
                            <div className="col-1">
                            </div>
                        </div>
                    </div>


                </div>
                <div className="" style={{ overflow:'hidden' }}>
                    <div>
                        <div className="row p-5" >
                            <div className="col-12 col-md-6" style={{background:`url(${image3}) center`, backgroundSize:'cover', minHeight:'350px'}}>
                            </div>
                            <div className="col-12 p-3 col-md-6 ">
                                <div className="d-flex flex-column h-100 justify-content-center" style={{width:'80%'}}>
                                    <div>
                                        <h3>Looking for a UQ expert?</h3>
                                        <p>
                                        We have experts across over 1,000 specialisations. Find a UQ researcher, PhD supervisor or media expert by searching UQ Experts.
                                        </p>
                                        <button className="btn rounded-0 btn-info btn-lg">Reach out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="" style={{ overflow:'hidden' }}>
                    <div>
                        <div className="row p-5" >
                            <div className="col-12 p-3 order-md-1 order-2 col-md-6 ">
                                <div className="d-flex flex-column h-100 justify-content-center" style={{width:'80%'}}>
                                    <div>
                                        <h3>Get Exposed!!</h3>
                                        <p>
                                        Unlock new opportunities by diving into cutting-edge technology. Stay ahead of the curve, enhance your skills, and connect with innovators. Embrace the future—get exposed to the latest in tech today!
                                        </p>
                                        <button className="btn btn-info rounded-0 btn-lg">Reach out</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 order-md-2 order-1 col-md-6" style={{background:`url(${image2}) center`, backgroundSize:'cover', minHeight:'350px'}}>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="" style={{ overflow:'hidden' }}>
                    <div>
                        <div className="row p-5" >
                            <div className="col-12 col-md-6" style={{background:`url(${image4}) center`, backgroundSize:'cover', minHeight:'350px'}}>
                            </div>
                            <div className="col-12 p-3 col-md-6 ">
                                <div className="d-flex flex-column h-100 justify-content-center" style={{width:'80%'}}>
                                    <div>
                                        <h3>Make a Difference</h3>
                                        <p>
                                        Step into the world of innovation and make your mark. Discover cutting-edge technologies, develop new skills, and be part of solutions that drive change. Get exposed to tech that makes a difference!
                                        </p>
                                        <button className="btn rounded-0 btn-info btn-lg">Get started!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div style={{minHeight:'100vh', background:`url(${image2}) right no-repeat`, backgroundSize:'cover'}} className="py-5 p-3">
                    <h2 className="text-center h1 fw-bolder">FROM THE BLOG</h2>
                    <hr/>
                    <div className="mt-5">
                        <div style={{}}>
                            <div className="d-flex justify-content-center" style={{flexWrap:'wrap', gap:'20px'}}>
                                <Card3Comp Image={image1} Text="Robotics | with esp32" />
                                <Card3Comp Image={image3} Text="Meeting with Internet Society" />
                                <Card3Comp Image={image1} Text="Robotics | with esp32" />
                                <Card3Comp Image={image3} Text="Meeting with Internet Society" />
                                <Card3Comp Image={image1} Text="Robotics | with esp32" />
                                <Card3Comp Image={image3} Text="Meeting with Internet Society" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Home