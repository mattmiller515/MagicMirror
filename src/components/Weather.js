import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';

import { Grid, Typography } from '@material-ui/core';

import { retrieveWeather, updateWeatherIcon } from '../actions/weatherActions';

const styles = {
  temperature: {
    fontSize: 200
  },
  weatherText: {}
};

export class Weather extends Component {
  componentDidMount() {
    // this.props.retrieveWeather(); //TODO - uncomment this
    this.props.updateWeatherIcon('Sunny');
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item>
          <Typography variant='h3' className={classes.temperature}>
            {this.props.weather.currentTemperature}&#176;
          </Typography>
        </Grid>
        <Grid item>
          {this.props.weather.weatherIcon}
          <Typography variant='h3' className={classes.weatherText}>
            {this.props.weather.currentWeather}
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
  updateWeatherIcon: weatherString => dispatch(updateWeatherIcon(weatherString)) //TODO - remove this
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Weather));
