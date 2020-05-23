import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';
import './ContactInfo.css';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.main
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  customColor: {
    color: theme.palette.secondary.contrastText,
  }
}));

const ContactInfo = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} className="ContactInformation_Grid_Left">
        <Box className={classes.paper}>
          <p>Office hours</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box className={classes.paper}>
          <p className={classes.customColor}>Office hours</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
        </Box>
      </Grid>

      <Grid item xs={4} className="ContactInformation_Grid_Right">
        <Box className={classes.paper}>
          <p>Office hours</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
          <p>Monday 8:30 AM - 5 PM</p>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactInfo;