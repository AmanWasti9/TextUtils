import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navb">

        <div className="container-fluid">
            <a className="navbar-brand Text" href="/"  style={{color : 'black' , fontSize:'1.7rem'}}><b>{props.title}</b></a>
            {/* <Link className="navbar-brand Text" to="/"  style={{color : 'black' , fontSize:'1.7rem'}}><b>{props.title}</b></Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <Link className="nav-link active" aria-current="page" to="/" style={{color : 'black'}}>Home</Link> */}
                    <a className="nav-link active" aria-current="page" href="/" style={{color : 'black'}}>Home</a>
                    </li>
                    <li className="nav-item">
                    {/* <Link className="nav-link" to="/about"  style={{color : 'black'}}>{props.aboutText}</Link> */}
                    <a className="nav-link" href="/about"  style={{color : 'black'}}>{props.aboutText}</a>
                    </li>
                </ul>

                {/* Change Color Button */}
                    <form className="formColor" onSubmit={props.handleSubmit}>
                        <input type="color" id="favcolor" className='color' name="favcolor" value={props.color} onChange={props.handleColorChange} />
                        <label><input type="submit" className="colorbtn"  value="Change Color"/></label>
                    </form>
            </div>

        </div>
        
    </nav>
  );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'TextUtils',
    aboutText: 'About TextUtils',
}
