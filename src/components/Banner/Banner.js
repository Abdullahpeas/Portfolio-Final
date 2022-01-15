import React, { Component } from 'react';
import image from '../../images/banner/org2-01-01-removebg-preview.png';
import './Banner.css';
// import Typewriter from "typewriter-effect";
import Typical from 'react-typical';
import Particles from "react-tsparticles";



const Banner = () => {
    return (
        <>
            <div className="section overflow-hidden">

                <div className="row overflow-hidden">

                    <div className="col-md-6 overflow-hidden">

                        <div className="card card-style mx-auto">

                            <img src={image} alt="" />

                        </div>
                    </div>
                    <div className="col-md-6 type">

                        <div >
                            <Typical
                                steps={['Hey,', 2000, 'Welcome to Developer World', 2000, 'Iam Web Developer', 2000, 'React Js Developer', 1000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                            <a target="_blank" href="https://drive.google.com/u/0/uc?id=1W6S03qeT3EVlWcBxq6mC02EEZR7Su5R2&export=download">
                                <button className="btn btn-success">Download Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;