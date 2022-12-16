import React from 'react';

import icon1 from '../assets/images/svg/loaction.svg'
import icon2 from '../assets/images/svg/email.svg'
import icon3 from '../assets/images/svg/phone.svg'

function Contact(props) {
    return (
        <div>

            <section className="tf-contact ">
                <div className="tf-container">
                    <div className="row justify-content-center"> 
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="tf-heading">
                                <h2 className="heading">Send us a message</h2>
                            </div>
                            <form action="contact/contact-process.php" method="post" id="commentform"  className="comment-form">
                                <div className="form-inner">
                                    <fieldset className="name">
                                        <input type="text" id="name" placeholder="Name" className="tb-my-input" name="name" tabIndex="2" aria-required="true" required="" />
                                    </fieldset>    
                                    <fieldset className="email">
                                        <input type="email" id="email" placeholder="Enter your email" className="tb-my-input" name="email" tabIndex="2" aria-required="true" required="" />
                                    </fieldset>
                                    <fieldset className="message">
                                        <textarea id="message" name="message" rows="4" placeholder="Message" tabIndex="4" aria-required="true" required=""></textarea>
                                    </fieldset>
                                </div>
                                <div className="btn-submit"><button className="tf-button style-2" type="submit">SEND MESSAGE</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Contact;