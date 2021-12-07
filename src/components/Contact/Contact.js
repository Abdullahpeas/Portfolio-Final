import React from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    AOS.init({ duration: 2000 });
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1zi1ofj', 'template_j5kzqo8', e.target, 'user_PO3gMauJrubTY4M98rer3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div data-aos="zoom-in-up" className="container">
            <h2 className=" m-5">Contact Me</h2>

            <form onSubmit={sendEmail}>
                <div className="row  mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div>
                        <textarea className="form-control mt-2" placeholder="Your message" name="message" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div>
                        <input type="submit" className="btn btn-success m-3" value="send message" />
                    </div>
                </div>
            </form>
        </div>

    );
};

export default Contact;