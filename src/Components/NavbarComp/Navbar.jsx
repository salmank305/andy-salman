
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top h-23 px-5"
        style={{ backgroundColor: "#162239F2" }}
      >
        <div className="container-fluid">
          <NavLink
            className="text-light "
            style={{ fontWeight: 900, fontSize: 36, textDecoration: "none" }}
          >
            <div className="head">
              <span style={{ color: "#F5A425" }}>CS</span> ELP
            </div>
          </NavLink>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item px-3 ">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item px-3 ">
                <NavLink className="nav-link" to="/programs">
                  Programs
                </NavLink>
              </li>
              <li className="nav-item px-3 ">
                <NavLink className="nav-link" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item px-3 ">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item px-3 ">
                <NavLink className="nav-link " aria-current="page" to="/login">
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
