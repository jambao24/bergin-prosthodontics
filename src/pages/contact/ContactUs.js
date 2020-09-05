import React from "react";
import cn from "./ContactUs.module.scss";
import classNames from "classnames/bind";

const ContactUs = () => {
    return (
        <>
            <div className={cn.Contact_Us}>
                <div className={classNames(cn.Column, cn.Column_Left)}>
                    <div>
                        <p className={cn.BigHeader}>Contact Us</p>
                        <p className={cn.BigText}>
                            We'd love to hear from you!
                        </p>
                        <br></br>
                        <br></br>
                        <p className={cn.Bold_Header}>Email</p>
                        <p>info@berginprosthodontics.com </p>
                        <br></br>
                        <br></br>
                        <p className={cn.Bold_Header}>Office Hours</p>
                        <p>Monday 8 AM - 5 PM</p>
                        <p>Tuesday 8 AM - 5 PM</p>
                        <p>Wednesday 8 AM - 5 PM</p>
                        <p>Thursday 8 AM - 12 PM</p>
                        <br></br>
                        <br></br>
                        <p className={cn.Bold_Header}>Phone Number</p>
                        <p>206-866-6466</p>
                        <br></br>
                        <br></br>
                        <p className={cn.Bold_Header}>Fax</p>
                        <p>206-866-6465</p>
                    </div>
                </div>

                <div className={classNames(cn.Column, cn.Column_Right)}>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.2076114399465!2d-122.2885698841777!3d47.660963092213805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490149cab95f4f7%3A0xfbe3c5ac7551bbd7!2sBergin%20Prosthodontics!5e0!3m2!1sen!2sus!4v1590447131151!5m2!1sen!2sus"
                            width="600"
                            height="400"
                            frameborder="0"
                            style={{ border: 0 }}
                            allowfullscreen="true"
                            aria-hidden="false"
                            tabindex="1"
                            title="Bergin Prosthodontics Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
