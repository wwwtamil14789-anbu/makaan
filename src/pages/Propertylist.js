import e1 from './imgs/property-1.jpg';
import e2 from './imgs/property-2.jpg';
import e3 from './imgs/property-3.jpg';
import e4 from './imgs/property-4.jpg';
import e5 from './imgs/property-5.jpg';
import e6 from './imgs/property-6.jpg';

import f1 from './imgs/call-to-action.jpg';

const Propertylist = () => {
    return (
        <>
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
                                    <i class="bi bi-geo-alt-fill text-success"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col">1000 Sqft</div>
                                    <div class="col border-start border-end">3 Bed</div>
                                    <div class="col">2 Bath</div>
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
                                    <i class="bi bi-geo-alt-fill text-success"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col">1000 Sqft</div>
                                    <div class="col border-start border-end">3 Bed</div>
                                    <div class="col">2 Bath</div>
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
                                    <i class="bi bi-geo-alt-fill text-success"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col">1000 Sqft</div>
                                    <div class="col border-start border-end">3 Bed</div>
                                    <div class="col">2 Bath</div>
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
                                    <i class="bi bi-geo-alt-fill text-success"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col">1000 Sqft</div>
                                    <div class="col border-start border-end">3 Bed</div>
                                    <div class="col">2 Bath</div>
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
                                    <i class="bi bi-geo-alt-fill text-success"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col">1000 Sqft</div>
                                    <div class="col border-start border-end">3 Bed</div>
                                    <div class="col">2 Bath</div>
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
                                    <i class="bi bi-geo-alt-fill text-success"></i>
                                    123 Street, New York, USA
                                </p>
                            </div>

                            <div class="card-footer bg-white">
                                <div class="row text-center">
                                    <div class="col">1000 Sqft</div>
                                    <div class="col border-start border-end">3 Bed</div>
                                    <div class="col">2 Bath</div>
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
export default Propertylist;