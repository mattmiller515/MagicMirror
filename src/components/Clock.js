import React, { Component } from 'react';
import { connect } from 'react-redux';
import LiveClock from 'react-live-clock';


import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { retrieveWeather } from '../actions/weatherActions';
import { retrieveQuote } from '../actions/quoteActions';


const styles = {
  clock: {
    fontSize: 200
  },
  seconds: {
    fontsize: 50,
    marginBottom: 20
  },
  date: {
    fontSize: 50
  }
};


export class Clock extends Component {

  componentDidMount() {
    this.retrieveData();

    let nextDate = new Date();
    if (nextDate.getMinutes() === 0) {
        this.updateData()
    } else {
        nextDate.setHours(nextDate.getHours() + 1);
        nextDate.setMinutes(0);
        nextDate.setSeconds(0);

        var difference = nextDate - new Date();
        setTimeout(this.updateData, difference);
    }
  }

  updateData = () => {
    setInterval(() => {
      this.retrieveData();
    }, 1000 * 60 * 60 * 2); //retrieve new info every 2 hours
  }

  retrieveData = () => {
    console.log('pulling new data: ' + new Date());
    this.props.retrieveWeather();
    this.props.retrieveQuote();
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container alignItems='flex-end'>
          <Grid item>
            <Typography variant='h3' className={classes.clock}>
              <LiveClock format={'h:mm'} ticking onChange={this.onClockChange} />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h3' className={classes.seconds}>
              <LiveClock format={'ss'} ticking />
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='h6' align='left' className={classes.date}>
          <LiveClock format='dddd, MMMM Mo' ticking />
        </Typography>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  retrieveWeather: () => dispatch(retrieveWeather()),
  retrieveQuote: () => dispatch(retrieveQuote())
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Clock));
