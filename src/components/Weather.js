import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { retrieveWeather } from '../actions/weatherActions';

const styles = {
  temperature: {
    fontSize: 200
  },
  weatherText: {
    maxWidth: 250
  }
};

export class Weather extends Component {
  componentDidMount() {
    this.props.retrieveWeather(); //TODO - uncomment this
    // this.props.updateWeatherIcon('Sunny');
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item>
          <Typography variant='h3' className={classes.temperature}>
            {this.props.weather.current.temperature}&#176;
          </Typography>
        </Grid>
        <Grid item>
          {this.props.weather.current.weatherIcon}
          <Typography variant='h4' className={classes.weatherText}>
            {this.props.weather.current.weather}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

const mapDispatchToProps = dispatch => ({
  retrieveWeather: () => dispatch(retrieveWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Weather));
