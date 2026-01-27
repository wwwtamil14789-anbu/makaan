const Property=()=>{
    return(
        <>
            <div className="search-section">
                <div className="container">
                    <div className="row g-3 align-items-center search-box">

                        <div className="col-lg-3 col-md-6">
                            <input type="text" className="form-control" placeholder="Search Keyword"></input>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <select className="form-select" defaultValue="">
                                <option value="">Property Type</option>
                                <option>Property Type1</option>
                                <option>Property Type2</option>
                                <option>Property Type3</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <select className="form-select" defaultValue="">
                                <option value="">Location</option>
                                <option>Location1</option>
                                <option>Location2</option>
                                <option>Location3</option>
                                
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <button className="btn btn-search w-100">Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Property;