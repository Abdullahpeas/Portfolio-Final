import React, { Component } from 'react';
import image from '../../images/banner/org2-01-01-removebg-preview.png';
import './Banner.css';
// import Typewriter from "typewriter-effect";
import Typical from 'react-typical';
import Particles from "react-tsparticles";



const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <>
            <div className="section overflow-hidden">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{

                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 1,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 110,
                            },
                            opacity: {
                                value: 0.2,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 6,
                            },
                        },
                        detectRetina: true,
                    }}
                />
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