import Carousel from "./HomeComp/Carasel"
import { FaHandsPraying } from "react-icons/fa6";
import { BsFillMortarboardFill } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import image from '../Images/3837.jpg'
import image1 from '../Images/robots.jpg'
import image3 from '../Images/isictaz.jpg'
import image2 from '../Images/desktop-shape-cta-right-1.svg'

const Home = () => {
    const CardComp = (props) => {
        return (
            <>
                <div className="col-12 col-md-4 my-4 text-white">
                    <div className="text-center">
                        {props.Icon}
                        <h4 className="text-center">{props.Title}</h4>
                        <p className="text-center">
                            {props.Content}
                        </p>
                    </div>
                </div>
            </>
        )
    }
    const Card2Comp = (props) => {
        return (
            <>
                <div className="p-2">
                    <div className="rounded p-1" style={{ width: '250px', backgroundColor: 'rgba(255,255,255,0.5)' }}>
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
                <div className="d-flex " style={{ minHeight: '60vh', alignItems: 'center', background:'rgba(21, 84, 154)' }}>
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
                <div className="d-flex p-4 py-5" style={{ minHeight: '100vh', background: `url(${image}) fixed center no-repeat `, alignItems: "center", backgroundSize: 'cover' }}>
                    <div>
                        <div className="display-4 fw-bolder text-white text-center mb-3">Get Involved!!!</div>
                        <div className="d-flex justify-content-center" style={{ flexWrap:'wrap'}}>
                            <Card2Comp 
                            Title="Workshops and Tutorials"
                            Content=" Regular sessions focusing on specific programming languages, tools, and technologies. These workshops often range from beginner to advanced levels"
                            />
                            <Card2Comp 
                            Title="Hackathons and Coding Competitions"
                            Content=" Events where members collaborate intensively on projects or compete in coding challenges to solve problems within a limited timeframe"
                            />
                            <Card2Comp 
                            Title="Guest Lectures and Talks"
                            Content="Inviting industry professionals, researchers, or alumni to speak on topics ranging from software development trends to career advice in tech"
                            />
                            <Card2Comp 
                            Title="Project Development"
                            Content="Providing opportunities for members to work on real-world projects, either independently or in teams, to apply their programming skills to solve practical problems"
                            />
                            <Card2Comp 
                            Title="Technical Skill-building Sessions"
                            Content="Hands-on sessions focusing on specific technical skills such as web development, mobile app development, data analysis, machine learning, etc"
                            />
                            <Card2Comp 
                            Title="Peer Learning and Code Reviews"
                            Content="Organizing sessions where members can review each other's code, share knowledge, and provide constructive feedback to improve coding practices"
                            />
                            <Card2Comp 
                            Title="Career Development Workshops"
                            Content="Workshops focused on resume building, interview preparation, networking skills, and understanding industry expectations in tech careers"
                            />
                            <Card2Comp 
                            Title="Open Source Contributions"
                            Content="Encouraging members to contribute to open-source projects, thereby gaining practical experience and collaborating with developers globally"
                            />
                        </div>
                    </div>
                </div>

                <div style={{minHeight:'100vh', background:`url(${image2}) right no-repeat`, backgroundSize:'cover'}} className="py-5 p-3">
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
                </div>
            </div>
        </>
    )
}

export default Home