import React from 'react';
import { Grid } from '@material-ui/core';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <Grid container className="ContactInformation">
      <Grid xs={4} className="ContactInformation_Grid_Left">
        <div className="ContactInformation_Column">
          <p>OFFICE HOURS</p>
          <p>Monday 8 AM - 5 PM</p>
          <p>Tuesday 8 AM - 5 PM</p>
          <p>Wednesday 8 AM - 5 PM</p>
          <p>Thursday 8 AM - 12 PM</p>
        </div>
      </Grid>

      <Grid xs={3}>
        <div className="ContactInformation_Column">
          <p>LOCATION</p>
          <p>3819 NE 45th St Suite C</p>
          <p>Seattle, WA 98105</p>
        </div>
      </Grid>

      <Grid xs={4} className="ContactInformation_Grid_Right">
        <div className="ContactInformation_Column">
          <p>MAP</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default ContactInfo;