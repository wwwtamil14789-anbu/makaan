import d1 from './imgs/about.jpg';

const About = () => {
    return (
        <>
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
        </>
    )
}
export default About; 