import React from 'react';
import { Link } from "react-router-dom";
import "../../style.css";

const NavBar = props => {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"></Link>
            <div>
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <Link onClick={props.SetAboutTab} className={"nav-link active nav-link"}>About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={props.SetProjectsTab} className={"nav-link active nav-link"}>Projects</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link onClick={props.SetContactTab} className={"nav-link active nav-link"}>Contact me</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}
export default NavBar