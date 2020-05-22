import React from 'react';
import "./ContactInfo.css"
import Divider from '@material-ui/core/Divider';

const ContactInfo = () => {
  return (
    <div className="ContactInfo">
      <div className="ContactInfo_Column">
        <p className="ContactInfo_Title">Office Hours Bitches</p>
        <p>Monday</p>
        <p>Monday</p>
        <p>Monday</p>
        <p>Monday</p>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="ContactInfo_Column">
        <p className="ContactInfo_Title">Location</p>
        <p>Seattle</p>
        <p>Seattle</p>
        <p>Seattle</p>
        <p>Seattle</p>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="ContactInfo_Column">
        <p className="ContactInfo_Title">Map</p>
      </div>
    </div>
  )
}

export default ContactInfo;