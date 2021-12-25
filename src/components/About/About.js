import React from 'react';
import img from '../../images/banner/my-bg.jpg';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init({ duration: 2000 })
    return (

        <div data-aos="flip-right" className="container  overflow-hidden " id='about'>


            <h2 className="m-5 fw-bold text-center overflow-hidden">About Me</h2>


            <div className="row overflow-hidden">
                <div className="col-md-6 cols-12 overflow-hidden">

                    <img className="img-fluid img-style" src={img} alt="" />

                </div>
                <div className="col-md-6 cols-12 overflow-hidden">

                    <p >Iam MERN Stack Developer.Iam expert in javascript,React,React-Router,HTML,CSS,Bootstrap,React Bootstrap,Material UI.Iam Familiar with Node.js,MongoDB,Express.js.Iam comfortable in Redux,React Native.Iam Study in Computer Science and Engineering.If you want to develop your website you can contact with me and you can hire me.Feel free to contact with me.</p>

                </div>


            </div>
        </div>

    );
};

export default About;