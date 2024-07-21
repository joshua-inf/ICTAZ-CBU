import image3 from '../../Images/2149406782.jpg'
const Carousel = () => {
    return (
        <>
            <div style={{zIndex:'-1'}}>
                <div id="" class="" data-bs-ride="carousel">
                    <div class="carousel-inner" style={{ height: '100vh' }}>
                        <div class="" style={{background:`url(${image3}) fixed center no-repeat`, backgroundSize:'cover'}}>
                            <div className='px-3' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <div className='col-12 col-md-10'>
                                        <div className='' style={{}}>
                                            <div style={{ height:'100vh' }} className='d-flex justify-content-center flex-column'>
                                                <div>
                                                    <div className=' text-start h-100' >
                                                        <div className=''>
                                                            <div className=''>
                                                                <div className='text-white' style={{}}>
                                                                    <div className='fw-bold display-5'>
                                                                        ICTAZ <br /> CBU CHAPTER
                                                                    </div>
                                                                    <div className='fs-4 fw-light py-4'>
                                                                    "Empowering tomorrow's leaders through today's technology."
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel