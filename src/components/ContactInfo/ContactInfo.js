import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <>
      <div className="ContactInfo">
    
        <div className={`ContactInfo_Column Left`}>
          <div>
            <p>OFFICE HOURS</p>
            <p>Monday 8 AM - 5 PM</p>
            <p>Tuesday 8 AM - 5 PM</p>
            <p>Wednesday 8 AM - 5 PM</p>
            <p>Thursday 8 AM - 12 PM</p>
          </div>
        </div>

        <div className={`ContactInfo_Column Middle`}>
          <div>
            <p>LOCATION</p>
            <p>3819 NE 45th St Suite C</p>
            <p>Seattle, WA 98105</p>
          </div>
        </div>

        <div className={`ContactInfo_Column Right`}>
          <div>
            <p>MAP</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.2076114399465!2d-122.2885698841777!3d47.660963092213805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490149cab95f4f7%3A0xfbe3c5ac7551bbd7!2sBergin%20Prosthodontics!5e0!3m2!1sen!2sus!4v1590447131151!5m2!1sen!2sus" title="Bergin Prosthodontics Location"></iframe>
          </div>
        </div>

      </div>
      
      <div className ="ContactInfo_Copyright">
         © 2020 Junping Bergin PLLC, Incorporated. All Rights Reserved.
      </div>
    </>
  );
}

export default ContactInfo;