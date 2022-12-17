import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg mt-1 ms-2 me-2 rounded">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                        </ul>
                    </div>
                    <div className="bu">
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" Forhtml="flexSwitchCheckDefault">{props.butText}</label>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
