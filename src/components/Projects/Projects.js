import React from 'react';
import images1 from '../../images/banner/imac-screen-mockup.png';
import images2 from '../../images/banner/clean-minimalistic-notebook-mockup.png';
import images3 from '../../images/banner/ipad-screen-mockup-with-keyboard.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



const Projects = () => {
    AOS.init({ duration: 2000 });

    return (
        <div data-aos="zoom-in-down" className='container mb-3  overflow-hidden'>
            <h2 className="m-5 fw-bold  overflow-hidden ">Projects</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 overflow-hidden">
                <div className="col overflow-hidden">
                    <div className="card h-100 overflow-hidden">
                        <img src={images1} height="150px" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Flying Zone</h5>
                            <p className="card-text text-start">
                                ● A Drone sell website where authenticated users can order drones <br />
                                ● Users can see their orders and give reviews from the
                                dashboard <br />
                                ● User can give review
                            </p>
                        </div>
                        <div className="card-footer">

                            <Link to="/secondDetail">
                                <button className="btn btn-warning">Details</button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={images2} height="150px" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Fastest Delivery</h5>
                            <p className="card-text">● Food delivery website where authenticated users can order foods <br />
                                ● Authenticated users can manage all orders and update orders status <br />
                                ● Validate Users can add any foods</p>
                        </div>
                        <div className="card-footer">
                            <Link to="/thirdDetail">
                                <button className="btn btn-warning">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={images3} height="150px" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Health Care</h5>
                            <p className="card-text">
                                ● A healthcare-related website where an authenticated user can see healthcare-related services <br />
                                ● An Authenticated user can see services details <br />
                                ● Authenticated users can see all trainers
                            </p>
                        </div>
                        <div className="card-footer">
                            <Link to="/firstDetail">
                                <button className="btn btn-warning">Details</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;