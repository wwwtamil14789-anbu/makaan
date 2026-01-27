import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

import b1 from './imgs/carousel-1.jpg';
import b2 from './imgs/carousel-2.jpg';

import c1 from './imgs/icon-apartment.png';
import c2 from './imgs/icon-building.png';
import c3 from './imgs/icon-condominium.png';
import c4 from './imgs/icon-deal.png';
import c5 from './imgs/icon-house.png';
import c6 from './imgs/icon-housing.png';
import c7 from './imgs/icon-luxury.png';
import c8 from './imgs/icon-neighborhood.png';
import c9 from './imgs/icon-search.png';
import c10 from './imgs/icon-villa.png';

import d1 from './imgs/about.jpg';

import e1 from './imgs/property-1.jpg';
import e2 from './imgs/property-2.jpg';
import e3 from './imgs/property-3.jpg';
import e4 from './imgs/property-4.jpg';
import e5 from './imgs/property-5.jpg';
import e6 from './imgs/property-6.jpg';

import f1 from './imgs/call-to-action.jpg';

import g1 from './imgs/team-1.jpg';
import g2 from './imgs/team-2.jpg';
import g3 from './imgs/team-3.jpg';
import g4 from './imgs/team-4.jpg';

import h1 from './imgs/testimonial-1.jpg';
import h2 from './imgs/testimonial-2.jpg';
import h3 from './imgs/testimonial-3.jpg';

const propertyData = [
    { title: "Apartment", p: "123 Properties", img: c7 },
    { title: "Villa", p: "123 Properties", img: c8 },
    { title: "Home", p: "123 Properties", img: c5 },
    { title: "Office", p: "123 Properties", img: c6 },
    { title: "Building", p: "123 Properties", img: c1 },
    { title: "Townhouse", p: "123 Properties", img: c2 },
    { title: "Shop", p: "123 Properties", img: c3 },
    { title: "Garage", p: "123 Properties", img: c4 },
];




const Home = () => {
    return (
        <div>
            <div className="Home">

                <div className="leftside-1">
                    <h2> Find A <span className="text-success">Perfect Home</span> To <br /> Live With Your Family.</h2>
                </div>


                <Link to="#" className="rightside-1">
                    <img src={b1} alt="" />
                </Link>

            </div>

            <div className="main">
                <div className="leftside-2">
                    <p>Vero elitr justo lorem. ipsum dolor at set stet sit diam no. kasd rebum <br /> ipsum et diam justo clita et kasd rebum see elitr.</p>
                    <button class="btn btn-success"><i class="fa-regular fa-circle-play"></i> Get satarted</button>
                </div>

                <Link to="#" className="rightside-2">
                    <img src={b2} alt="" />
                </Link>
            </div>


            {/* search section */}

            <div className="search-section">
                <div className="container">
                    <div className="row g-3 align-items-center">

                        <div className="col-md-3">
                            <input type="text" className="form-control search-input" placeholder="Search Keyword" />
                        </div>

                        <div className="col-md-3">
                            <select className="form-select search-input">
                                <option selected>Property Type</option>
                                <option>Apartment</option>
                                <option>House</option>
                                <option>Villa</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <select className="form-select search-input">
                                <option selected>Location</option>
                                <option>chennai</option>
                                <option>Bangalore</option>
                                <option>hyderabad</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <button className="btn btn-search w-100">Search</button>
                        </div>

                    </div>
                </div>
            </div>


            {/* property type */}

            <div class="property-type-section py-5">
                <div class="container">

                    {/* <!-- Title --> */}
                    <div class="text-center mb-5">
                        <h1 class="fw-bold property-title">Property Types</h1>
                        <p class="text-muted mt-3">
                            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br />
                            vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                        </p>
                    </div>

                    {/* <!-- Cards --> */}
                    <div class="row g-4">
                        {/* <!-- Card --> */}
                        <div class="col-lg-3 col-md-6" id="box-8">
                            <div class="type-card text-center">
                                <div class="icon-circle">
                                    <i class="bi bi-building"></i>
                                    <img src={c1} alt="" />
                                </div>
                                <h5 class="mt-3">Apartment</h5>
                                <p>123 Properties</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" id="box-8">
                            <div class="type-card text-center">
                                <div class="icon-circle">
                                    {/* <i class="bi bi-house"></i> */}
                                    <img src={c10} alt="" />
                                </div>
                                <h5 class="mt-3">Villa</h5>
                                <p>123 Properties</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" id="box-8">
                            <div class="type-card text-center">
                                <div class="icon-circle">
                                    {/* <i class="bi bi-house-heart"></i> */}
                                    <img src={c5} alt="" />
                                </div>
                                <h5 class="mt-3">Home</h5>
                                <p>123 Properties</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" id="box-8">
                            <div class="type-card text-center">
                                <div class="icon-circle">
                                    {/* <i class="bi bi-geo-alt"></i> */}
                                    <img src={c3} alt="" />
                                </div>
                                <h5 class="mt-3">Office</h5>
                                <p>123 Properties</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" id="box-8">
                            <div class="type-card text-center">
                                <div class="icon-circle">
                                    {/* <i class="bi bi-buildings"></i> */}
                                    <img src={c2} alt="" />
                                </div>
                                <h5 class="mt-3">Building</h5>
                                <p>123 Properties</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" id="box-8">
                            <div class="type-card text-center">
                                <div class="icon-circle">
                                    {/* <i class="bi bi-house-door"></i> */}
                                    <img src={c3} alt="" />
                                </div>
                                <h5 class="mt-3">Townhouse</h5>
                                <p>123 Properties</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" id="box-8">
                            <div class="type-card text-center">
                                <div class="icon-circle">
                                    {/* <i class="bi bi-shop"></i> */}
                                    <img src={c6} alt="" />
                                </div>
                                <h5 class="mt-3">Shop</h5>
                                <p>123 Properties</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" id="box-8">
                            <div class="type-card text-center">
                                <div class="icon-circle">
                                    {/* <i class="bi bi-car-front"></i> */}
                                    <img src={c9} alt="" />
                                </div>
                                <h5 class="mt-3">Garage</h5>
                                <p>123 Properties</p>
                            </div>
                        </div>
                    </div>


                    <div class="find-property-section py-5">
                        <div class="container">
                            <div class="row align-items-center">

                                {/* <!-- Image Column --> */}
                                <div class="col-lg-6 mb-4 mb-lg-0 position-relative">
                                    <div class="green-shape"></div>
                                    <img src={d1} alt="" />
                                </div>

                                {/* <!-- Content Column --> */}
                                <div class="col-lg-6">
                                    <h1 class="fw-bold mb-4">
                                        #1 Place To Find The Perfect <br /> Property
                                    </h1>

                                    <p class="text-muted mb-4">
                                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
                                        erat amet.
                                    </p>

                                    <ul class="list-unstyled property-list mb-4">
                                        <li><i class="fa-solid fa-check"></i> Tempor erat elitr rebum at clita</li>
                                        <li><i class="fa-solid fa-check"></i> Aliqu diam amet diam et eos</li>
                                        <li><i class="fa-solid fa-check"></i> Clita duo justo magna dolore erat amet</li>
                                    </ul>

                                    <button class="btn btn-success px-4 py-2"><i class="fa-solid fa-angles-right"></i> Read More</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* property-list */}
            <div class="container py-5">

                {/* <!-- Header --> */}
                <div class="row align-items-center mb-4">

                    <div class="row align-items-center">

                        {/* <!-- Left Content --> */}
                        <div class="col-lg-8">
                            <h1 class="property-heading">Property Listing</h1>
                            <p class="property-text">
                                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br />
                                vero ipsum sit eirmod sit diam justo sed rebum.
                            </p>
                        </div>

                        {/* <!-- Right Buttons --> */}
                        <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                            <div class="filter-buttons">
                                <button class="btn btn-featured">Featured</button>
                                <button class="btn btn-outline-custom">For Sell</button>
                                <button class="btn btn-outline-custom">For Rent</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- Cards --> */}
                <div class="row g-4">

                    {/* Card 1 */}
                    <div class="col-lg-4 col-md-6">
                        <div class="card property-card">
                            <div class="position-relative">
                                <img src={e1} class="card-img-top" alt="" />
                                <span class="badge position-absolute top-0 start-0 m-3">For Sell</span>
                                <span class="property-type">Apartment</span>
                            </div>

                            <div class="card-body">
                                <h5 class="text-success fw-bold">$12,345</h5>
                                <h6 class="fw-bold">Golden Urban House For Sell</h6>
                                <p class="text-muted">
                                    <i class="fa-solid fa-location-dot"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col"><i class="fa-solid fa-ruler-combined"></i>1000 Sqft</div>
                                    <div class="col border-start border-end"><i class="fa-solid fa-bed"></i>3 Bed</div>
                                    <div class="col"><i class="fa-solid fa-bath"></i>2 Bath</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div class="col-lg-4 col-md-6">
                        <div class="card property-card">
                            <div class="position-relative">
                                <img src={e2} class="card-img-top" alt="" />
                                <span class="badge position-absolute top-0 start-0 m-3">For Rent</span>
                                <span class="property-type">Villa</span>
                            </div>

                            <div class="card-body">
                                <h5 class="text-success fw-bold">$12,345</h5>
                                <h6 class="fw-bold">Golden Urban House For Sell</h6>
                                <p class="text-muted">
                                    <i class="fa-solid fa-location-dot"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col"><i class="fa-solid fa-ruler-combined"></i>1000 Sqft</div>
                                    <div class="col border-start border-end"><i class="fa-solid fa-bed"></i>3 Bed</div>
                                    <div class="col"><i class="fa-solid fa-bath"></i>2 Bath</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div class="col-lg-4 col-md-6">
                        <div class="card property-card">
                            <div class="position-relative">
                                <img src={e3} class="card-img-top" alt="" />
                                <span class="badge position-absolute top-0 start-0 m-3">For Sell</span>
                                <span class="property-type">Office</span>
                            </div>

                            <div class="card-body">
                                <h5 class="text-success fw-bold">$12,345</h5>
                                <h6 class="fw-bold">Golden Urban House For Sell</h6>
                                <p class="text-muted">
                                    <i class="fa-solid fa-location-dot"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col"><i class="fa-solid fa-ruler-combined"></i>1000 Sqft</div>
                                    <div class="col border-start border-end"><i class="fa-solid fa-bed"></i>3 Bed</div>
                                    <div class="col"><i class="fa-solid fa-bath"></i>2 Bath</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 4 --> */}
                    <div class="col-lg-4 col-md-6">
                        <div class="card property-card">
                            <div class="position-relative">
                                <img src={e4} class="card-img-top" alt="" />
                                <span class="badge position-absolute top-0 start-0 m-3">For Rent</span>
                                <span class="property-type">Building</span>
                            </div>

                            <div class="card-body">
                                <h5 class="text-success fw-bold">$12,345</h5>
                                <h6 class="fw-bold">Golden Urban House For Sell</h6>
                                <p class="text-muted">
                                    <i class="fa-solid fa-location-dot"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col"><i class="fa-solid fa-ruler-combined"></i>1000 Sqft</div>
                                    <div class="col border-start border-end"><i class="fa-solid fa-bed"></i>3 Bed</div>
                                    <div class="col"><i class="fa-solid fa-bath"></i>2 Bath</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 5 --> */}
                    <div class="col-lg-4 col-md-6">
                        <div class="card property-card">
                            <div class="position-relative">
                                <img src={e5} class="card-img-top" alt="" />
                                <span class="badge position-absolute top-0 start-0 m-3">For Sell</span>
                                <span class="property-type">Home</span>
                            </div>

                            <div class="card-body">
                                <h5 class="text-success fw-bold">$12,345</h5>
                                <h6 class="fw-bold">Golden Urban House For Sell</h6>
                                <p class="text-muted">
                                    <i class="fa-solid fa-location-dot"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col"><i class="fa-solid fa-ruler-combined"></i>1000 Sqft</div>
                                    <div class="col border-start border-end"><i class="fa-solid fa-bed"></i>3 Bed</div>
                                    <div class="col"><i class="fa-solid fa-bath"></i>2 Bath</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 6 --> */}
                    <div class="col-lg-4 col-md-6">
                        <div class="card property-card">
                            <div class="position-relative">
                                <img src={e6} class="card-img-top" alt="" />
                                <span class="badge position-absolute top-0 start-0 m-3">For Rent</span>
                                <span class="property-type" >Shop</span>
                            </div>

                            <div class="card-body">
                                <h5 class="text-success fw-bold">$12,345</h5>
                                <h6 class="fw-bold">Golden Urban House For Sell</h6>
                                <p class="text-muted">
                                    <i class="fa-solid fa-location-dot"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col"><i class="fa-solid fa-ruler-combined"></i>1000 Sqft</div>
                                    <div class="col border-start border-end"><i class="fa-solid fa-bed"></i>3 Bed</div>
                                    <div class="col"><i class="fa-solid fa-bath"></i>82 Bath</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="browse-btn"><i class="fa-solid fa-angles-right"></i> Browse More Property</button>

            </div>



            <section class="agent-section py-5">
                <div class="container">
                    <div class="agent-box p-4 p-lg-5">
                        <div class="row align-items-center">

                            {/* <!-- Image --> */}
                            <div class="image col-lg-6 mb-4 mb-lg-0">
                                <img src={f1} class="img-fluid rounded-3" alt="Agent" />
                            </div>

                            {/* <!-- Content --> */}
                            <div class="agent-content">
                                <h1>Contact With Our Certified <br /> Agent</h1>
                                <p>
                                    Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum <br />
                                    sit sit diam justo sed vero dolor duo.
                                </p>


                                <div class="agent-buttons">
                                    <a href="#" class="btn-call">
                                        <i class="fa-solid fa-phone"></i>
                                        Make A Call
                                    </a>

                                    <a href="#" class="btn-appointment">
                                        <i class="fa-solid fa-calendar-days"></i>
                                        Get Appointment
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section class="py-5">
                <div class="container">

                    {/* <!-- Section Title --> */}
                    <div class="text-center mb-5">
                        <h1 class="fw-bold">Property Agents</h1>
                        <p class="text-muted mt-3">
                            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br />
                            vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                        </p>
                    </div>

                    {/* <!-- Agents --> */}
                    <div class="row g-4">

                        {/* <!-- Agent Card --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card border-0 shadow text-center agent-card">
                                <img src={g1} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <div class="agent-social">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                    <h5 class="fw-bold mt-4">Full Name</h5>
                                    <small class="text-muted">Designation</small>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Copy same card --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card border-0 shadow text-center agent-card">
                                <img src={g2} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <div class="agent-social">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                    <h5 class="fw-bold mt-4">Full Name</h5>
                                    <small class="text-muted">Designation</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="card border-0 shadow text-center agent-card">
                                <img src={g3} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <div class="agent-social">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                    <h5 class="fw-bold mt-4">Full Name</h5>
                                    <small class="text-muted">Designation</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="card border-0 shadow text-center agent-card">
                                <img src={g4} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <div class="agent-social">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                    <h5 class="fw-bold mt-4">Full Name</h5>
                                    <small class="text-muted">Designation</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="py-5 bg-white">
                <div class="container">

                    {/* <!-- Title --> */}
                    <div class="text-center mb-5">
                        <h1 class="fw-bold">Our Clients Say!</h1>
                        <p class="text-muted mt-3">
                            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br />
                            vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                        </p>
                    </div>

                    {/* <!-- Testimonials --> */}
                    <div class="testimonial-wrapper">

                        {/* <!-- Item --> */}
                        <div class="testimonial-item">
                            <p>
                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor
                                amet diam stet. Est stet ea lorem amet est kasd kasd erat eos
                            </p>

                            <div class="d-flex align-items-center mt-3">
                                <img src={h1} class="rounded-circle" alt="" />
                                <div class="ms-3">
                                    <h6 class="mb-0 fw-bold">Client Name</h6>
                                    <small class="text-muted">Profession</small>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Item --> */}
                        <div class="testimonial-item">
                            <p>
                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor
                                amet diam stet. Est stet ea lorem amet est kasd kasd erat eos
                            </p>

                            <div class="d-flex align-items-center mt-3">
                                <img src={h2} class="rounded-circle" alt="" />
                                <div class="ms-3">
                                    <h6 class="mb-0 fw-bold">Client Name</h6>
                                    <small class="text-muted">Profession</small>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Item --> */}
                        <div class="testimonial-item">
                            <p>
                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor
                                amet diam stet. Est stet ea lorem amet est kasd kasd erat eos
                            </p>

                            <div class="d-flex align-items-center mt-3">
                                <img src={h3} class="rounded-circle" alt="" />
                                <div class="ms-3">
                                    <h6 class="mb-0 fw-bold">Client Name</h6>
                                    <small class="text-muted">Profession</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <footer class="footer pt-5">
                <div class="container">
                    <div class="row g-5">

                        {/* <!-- Get In Touch --> */}
                        <div class="col-lg-3 col-md-6">
                            <h4 class="footer-title">Get In Touch</h4>
                            <p><i class="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</p>
                            <p><i class="fa-solid fa-phone"></i>  +012 345 67890</p>
                            <p><i class="fa fa-envelope me-2"></i>makaan@gmail.com</p>

                            <div class="footer-social mt-4">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        {/* <!-- Quick Links --> */}
                        <div class="col-lg-3 col-md-6">
                            <h4 class="footer-title">Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="#"><i class="fa-solid fa-angle-right"></i> About Us</a></li>
                                <li><a href="#"><i class="fa-solid fa-angle-right"></i> Contact Us</a></li>
                                <li><a href="#"><i class="fa-solid fa-angle-right"></i> Our Services</a></li>
                                <li><a href="#"><i class="fa-solid fa-angle-right"></i> Privacy Policy</a></li>
                                <li><a href="#"><i class="fa-solid fa-angle-right"></i> Terms & Condition</a></li>
                            </ul>
                        </div>

                        {/* <!-- Photo Gallery --> */}
                        <div class="col-lg-3 col-md-6">
                            <h4 class="footer-title">Photo Gallery</h4>
                            <div class="row g-2">
                                <div class="col-4"><img src={e1} class="img-fluid gallery-img" /></div>
                                <div class="col-4"><img src={e2} class="img-fluid gallery-img" /></div>
                                <div class="col-4"><img src={e3} class="img-fluid gallery-img" /></div>
                                <div class="col-4"><img src={e4} class="img-fluid gallery-img" /></div>
                                <div class="col-4"><img src={e5} class="img-fluid gallery-img" /></div>
                                <div class="col-4"><img src={e6} class="img-fluid gallery-img" /></div>
                            </div>
                        </div>

                        {/* <!-- Newsletter --> */}
                        <div class="col-lg-3 col-md-6">
                            <h4 class="footer-title">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative">
                                <input type="email" class="form-control footer-input" placeholder="Your email" />
                                <button class="btn footer-btn">SignUp</button>
                            </div>
                        </div>

                    </div>

                    <hr class="footer-line my-4" />

                    {/* <!-- Bottom --> */}
                    <div class="row align-items-center pb-3">
                        <div class="col-md-6 text-center text-md-start">
                            <small>© <span class="fw-bold">Your Site Name</span>, All Right Reserved. Designed By <span class="fw-bold">HTML Codex</span></small>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <a href="#" class="footer-bottom-link">Home</a>
                            <a href="#" class="footer-bottom-link">Cookies</a>
                            <a href="#" class="footer-bottom-link">Help</a>
                            <a href="#" class="footer-bottom-link">FAQs</a>
                        </div>
                    </div>

                </div>
            </footer>


        </div >

    )
}
export default Home; 