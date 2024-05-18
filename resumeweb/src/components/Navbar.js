import React from 'react'
import PropTypes from 'prop-types'
import Login from '../components/Login'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar(props) {
  const clickhome = ()=>{
    <Login/>
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" onClick={clickhome} to="/text">Home</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/new">Register</Link>
              </li>
              
              {/* <li className="nav-item">
                <Link className="nav-link" to="/resume3">Resume</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/resume2">Resume2</Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/allcv">Resume template</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className=" dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">{props.about}</a>
              </li>
              
            </ul>
            {/* <form className="d-flex">
              <input className="navbarsearch" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string,
                    about : PropTypes.string}

Navbar.defaultProps = {
    title : "ResumeBuilder",
    about : ""
}
