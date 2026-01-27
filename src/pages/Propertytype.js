import './index.css';

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

const Propertytype = () => {
    return (
        <>
            {/* property type */}

            < div class="property-type-section py-5" >
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
                                    {/* <p>Tempor erat elitr rebum at clita</p>
                                    <p>Aliqu diam amet diam et eos</p>
                                    <p>Clita duo justo magna dolore erat amet</p> */}

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
            </div >

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
export default Propertytype;