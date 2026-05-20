import b1 from './imgs/carousel-1.jpg';

import d1 from './imgs/about.jpg';

import e1 from './imgs/property-1.jpg';
import e2 from './imgs/property-2.jpg';
import e3 from './imgs/property-3.jpg';
import e4 from './imgs/property-4.jpg';
import e5 from './imgs/property-5.jpg';
import e6 from './imgs/property-6.jpg';

const About = () => {
    return (
        <>
            <div className='title'>
                <h1>About</h1>
                <br/>
                <br/>
            </div>
            <div className='aboutpage'>
                <h2><span>Home</span>/<span>pages</span>/ About</h2>
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
export default About; 