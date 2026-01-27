import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

import a1 from './imgs/icon-deal.png';

const Layout = () => {
  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top py-0 ">
        <div className="container">

          <Link className="navbar-brand d-flex align-items-center " to="/">
            <div className="icon p-2 me-2">
              <img src={a1} alt="" />
            </div>
            <h2 className="m-0 text-success">Makaan</h2>
          </Link>

          <button
            type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link" to="/"><span className="text-success"><b>Home</b></span></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/property" data-bs-toggle="dropdown">Property</Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item nav-link" to="/property-list">Property List</Link>
                  <Link className="dropdown-item nav-link" to="/property-type">Property Type</Link>
                  <Link className="dropdown-item nav-link" to="/property-agent">Property Agent</Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/pages" data-bs-toggle="dropdown">Pages</Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/testimonial">Testimonial</Link>
                  <Link className="dropdown-item" to="/error404">Error 404</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-success px-3 d-none d-lg-flex" to="/add-property">Add Property</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
export default Layout;