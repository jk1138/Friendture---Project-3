import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Friendture</a>
            <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarNav" ariaControls="navbarNav" ariaExpanded="false" ariaLabel="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Homepage">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tropies">Trophies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/userprofile">My Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;