import React, { useState } from 'react'
import { Link,NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success w-100" style={{position:"fixed",zIndex:"100"}}>
                <Link className="navbar-brand fs-1 fst-italic" to="/">CONTEST</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <NavLink activeClassName="navbar__link--active" className="nav-link active fs-5 text-right text-" aria-current="page"  to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            
                            <NavLink activeClassName="navbar__link--active" className="nav-link active fs-5 text-right" aria-current="page" to="/today">GoingOn</NavLink>
                        </li>   
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}
