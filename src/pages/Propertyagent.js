import b1 from './imgs/carousel-1.jpg';

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


const Propertyagent = () => {
    return (
        <>

            <div className='title'>
                <h1>Property Agents</h1>
                <br />
                <br />
            </div>
            <div className='aboutpage'>
                <h2><span>Home</span>/<span>pages</span>/ PropertyAgents</h2>
                <img src={b1}></img>
            </div>

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

        </>

    )
}
export default Propertyagent;