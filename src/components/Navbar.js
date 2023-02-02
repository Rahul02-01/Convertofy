import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg mt-1 ms-2 me-2 rounded">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/textarea">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/textarea">TextArea</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={props.toggletitletext} >About</Link>
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
