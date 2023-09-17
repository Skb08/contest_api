import React,{useState} from 'react';
import axios from 'axios';
import {NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const [flag,setFlag]= useState(1);
    
    // console.log(user);
    // async function submitHandler(e){
    //     e.preventDefault();
    //     console.log("UserData inside function",user); 
    //     // try{
    //     //     await axios.post("http://localhost:3000/",{
    //     //         user
    //     //     });  
    //     // }catch(e){
    //     //     console.log(e);
    //     // }
    // }

    function login(){
        axios.post("https://contestapi-backend.onrender.com/api/save",{email:user.email,username:user.name}).then((res)=>{
            console.log(res.data);
        }); 
    }

    if(isAuthenticated && flag===1){
        login();
        setFlag(0);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <NavLink to="/" exact>
                        <h3 className='mr-auto p-2'  style={{ textDecoration: 'none', color: 'white' }}>CONTEST</h3>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                <li className="nav-item">
                                    <NavLink className="nav-link fs-5" to="/"> Home</NavLink>
                                </li>
                            }
                            {
                                isAuthenticated &&
                                (<li className="nav-item">
                                    <NavLink className="nav-link fs-5" to="/today">GoingOn</NavLink>
                                </li>)
                            }
                        </ul>
                        {
                            
                            isAuthenticated ?
                            (<div className='d-flex align-items-center' type='submit' >
                                <img onClick={() => logout()} className='mr-3 rounded-circle' src={user.picture} alt={user.name} style={{ width: "40px" }} />
                                <h5 >{user.name}</h5>
                            </div>)
                            : (<button type='submit' className='btn d-flex p-2 font-weight-bold'  onClick={()=>{loginWithRedirect()}}>Log In</button>)
     
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
