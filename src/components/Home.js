import React, { useEffect, useState } from "react"
import Navbar from "./Navbar";

// leetcode https://leetcode.com/static/images/LeetCode_Sharing.png
// heackerearth https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdax8uhfI-79JCqHJ0eR35mCocFxHidYZlFkeWqYchKil2bb5yPMu1PpolSOKynJtY0leSCBqqzRM&usqp=CAU&ec=48665701

const Home = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('')

    const fetchUserData = () => {
        fetch("https://kontests.net/api/v1/all")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
                console.log(data);
                console.log(data.length);


            })
    }

    const dhm = (ms) => {
        const days = Math.floor(ms / (24 * 60 * 60));
        const daysms = ms % (24 * 60 * 60);
        const hours = Math.floor(daysms / (60 * 60));
        const hoursms = ms % (60 * 60);
        const minutes = Math.floor(hoursms / (60));
        const minutesms = ms % (60);
        const sec = Math.floor(minutesms);
        return days + ":" + hours + ":" + minutes + ":" + sec;
    }


    useEffect(() => {
        fetchUserData()
    }, [])


    return (
        <>
            <Navbar/>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className='carousel-caption' style={{ zIndex: '10' }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900x350/?scenary" className="d-block w-100 h-40" style={{ filter: 'brightness(30%' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x350/?webdesign" className="d-block w-100 h-40" style={{ filter: 'brightness(25%' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x350/?hacking" className="d-block w-100 h-40" style={{ filter: 'brightness(30%' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x350/?nature" className="d-block w-100 h-40" style={{ filter: 'brightness(30%' }} alt="..." />
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="" style={{ background: "linear-gradient(90deg, rgba(13,129,133,1) 0%, rgba(22,228,174,1) 41%, rgba(18,150,155,1) 100%)" }}>
                <div className="container" >
                    <div className="m-4 text-center ">
                        <h2 className="font-weight-bold text-decoration-underline ">CONTEST DETAILS</h2>
                    </div>
                    {users && (
                        <ul className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-12'>
                            {users
                                .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                                .map(user => {
                                    return (

                                        <div key={user.id} >

                                            <div className="card m-3 mt-3 shadow p-3 mb-5 bg-white rounded" style={{background:"linear-gradient(90deg, rgba(166,239,134,1) 0%, rgba(247,246,137,1) 52%, rgba(166,239,134,1) 100%)", width: "18rem", height: "550px" }}>

                                            {(user.site === "CodeChef") ?<img src="https://image.pngaaa.com/788/4464788-middle.png" alt='suraj1' className="card-img-top text-dark" style={{ width: "100%", height: "140px", objectFit: "fill" }} />
                                                :(user.site === "HackerRank")?<img src="https://e7.pngegg.com/pngimages/891/900/png-clipart-logo-hackerrank-where-s-weed-java-hacker.png" 
                                                alt='suraj2' className="card-img-top text-dark" style={{ width: "100%", height: "140px", objectFit: "fill" }} />
                                                :(user.site === "HackerEarth")?<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdax8uhfI-79JCqHJ0eR35mCocFxHidYZlFkeWqYchKil2bb5yPMu1PpolSOKynJtY0leSCBqqzRM&usqp=CAU&ec=48665701" 
                                                alt='suraj3' className="card-img-top text-dark" style={{ width: "100%", height: "140px", objectFit: "fill" }} />
                                                :(user.site === "CodeForces::Gym")?<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTps1TNBpotXAvMClB4ugEvnp64gmwub-5TK67eLVuJAQ&usqp=CAU&ec=48665701" alt='suraj4' className="card-img-top text-dark" style={{ width: "100%", height: "140px", objectFit: "fill" }} />
                                                :(user.site === "AtCoder")?<img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/p1mckvzowm4fzzixscah" 
                                                alt='suraj5' className="card-img-top text-dark" style={{ width: "100%", maxHeight: "140px", objectFit: "fill" }} />
                                                :(user.site === "LeetCode")?<img src="https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png" alt='suraj6' className="card-img-top text-dark" style={{ width: "100%", height: "140px", objectFit: "fill" }} />
                                                :(user.site === "CodeForces")?<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ug4pQwX1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h0cf17j89s2kgyvie3zo.png"
                                                 alt='suraj7' className="card-img-top text-dark" style={{ width: "100%", height: "140px", objectFit: "fill" }} />
                                                :""}
                                                

                                                <div className="card-body text-dark">

                                                    <h6 className="card-title ml-1" >{user.name}</h6>
                                                    <h5 className="card-title ml-1" >{user.site}</h5>
                                                    <h6 className="card-title ml-1" >{"Duration: "}{dhm(user.duration)}</h6>
                                                    <h6 className="card-title ml-1" >{"Start: "}{user.start_time}</h6>
                                                    <h6 className="card-title ml-1" >{"End: "}{user.end_time}</h6>
                                                    <h6 className="card-title ml-1" >{"Status: "}{user.status}</h6>
                                                    <h6 className="card-title ml-1" >{"Today: "}{user.in_24_hours}</h6>

                                                    <hr />
                                                    <div className='container w-100'>

                                                        <a href={user.url}><button type="button" className="btn btn-primary m-2" style={{ width: "5rem" }}>Link</button></a>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                        </ul>
                    )}

                </div>
            </div>
        </>
    );
}

export default Home;