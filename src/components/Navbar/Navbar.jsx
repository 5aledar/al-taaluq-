import React from 'react'

const Navbar = () => {
    return (
        <div className="container mx-auto p-0 bg-primary text-white hidden lg:flex">
            <div className="container mx-auto p-3">
                <div className="flex items-center">
                    <a href="index.html">
                        <h2 className="text-white font-bold m-0">GrowMark</h2>
                    </a>
                    <div className="ml-auto flex items-center">
                        <small className="ml-4 text-sm"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</small>
                        <small className="ml-4 text-sm"><i className="fa fa-envelope me-3"></i>info@example.com</small>
                        <small className="ml-4 text-sm"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</small>
                        <div className="ml-3 flex">
                            <a className="btn btn-sm rounded-full bg-light text-primary hover:bg-light hover:text-primary mx-2" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-sm rounded-full bg-light text-primary hover:bg-light hover:text-primary mx-2" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-sm rounded-full bg-light text-primary hover:bg-light hover:text-primary mx-2" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
