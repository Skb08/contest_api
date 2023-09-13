import React from 'react'
import {NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <div class="container-fluid">
                    <NavLink to="/" exact>
                        <h3 className='mr-auto p-2'  style={{ textDecoration: 'none', color: 'white' }}>CONTEST</h3>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link fs-5" to="/"> Home</NavLink>
                            </li>
                            {
                                isAuthenticated &&
                                (<li class="nav-item">
                                    <NavLink className="nav-link fs-5" to="/today">GoingOn</NavLink>
                                </li>)
                            }
                        </ul>
                        {
                            isAuthenticated ?
                            (<div className='d-flex align-items-center' onClick={() => logout()}>
                                <img className='mr-3 rounded-circle' src={user.picture} alt={user.name} style={{ width: "40px" }} />
                                <h5>{user.name}</h5>
                            </div>)
                            : (<button className='btn d-flex p-2 font-weight-bold' onClick={() => loginWithRedirect()}>Log In</button>)
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
