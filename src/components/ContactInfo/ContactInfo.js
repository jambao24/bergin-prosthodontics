import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Theme from "../../Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ContactInfo = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Box flexDirection="column" className={classes.paper}>
              <p>Office hours</p>
              <p>Monday 8:30 AM - 5 PM</p>
              <p>Monday 8:30 AM - 5 PM</p>
              <p>Monday 8:30 AM - 5 PM</p>
              <p>Monday 8:30 AM - 5 PM</p>
            </Box>
          </Grid>
          <Grid item xs={4}>
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
              <p>Office hours</p>
              <p>Monday 8:30 AM - 5 PM</p>
              <p>Monday 8:30 AM - 5 PM</p>
              <p>Monday 8:30 AM - 5 PM</p>
              <p>Monday 8:30 AM - 5 PM</p>
            </Box>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default ContactInfo;