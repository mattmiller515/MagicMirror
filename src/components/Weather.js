import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = {
  temperature: {
    fontSize: 200
  },
  weatherText: {
    maxWidth: 250
  },
  marginTop: {
    marginTop:20
  },
  forecastText: {
    maxWidth: 100
  }
};

const Forecast = (props) => {
  const { classes, opacity } = props;
  const { weather, temperature, dateTime, weatherIcon } = props.weather;

  return (
    <React.Fragment>
      <div style={{opacity: opacity}}>
        <Typography variant='subtitle1'>{dateTime}</Typography>
        <Grid container justify='center'>
          <Grid item>
            {weatherIcon}
          </Grid>
          <Grid item>
            {temperature}&#176;
          </Grid>
        </Grid>
        <Typography variant='subtitle2' className={classes.forecastText}>{weather}</Typography>
      </div>
    </React.Fragment>
  )
}

const WrappedForecast = withStyles(styles)(Forecast);

export class Weather extends Component {

  render() {
    const { classes, weather } = this.props;
    return (
      <React.Fragment>
        <Grid container>
          <Grid item>
            <Typography variant='h3' className={classes.temperature}>
              {weather.current.temperature}&#176;
            </Typography>
          </Grid>
          <Grid item>
            {weather.current.weatherIcon}
            <Typography variant='h4' className={classes.weatherText}>
              {weather.current.weather}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} justify='flex-end' className={classes.marginTop}>
          <Grid item>
            <WrappedForecast weather={weather.hourly[0]} />
          </Grid>
          <Grid item>
            <WrappedForecast weather={weather.hourly[1]} />
          </Grid>
          <Grid item>
            <WrappedForecast weather={weather.hourly[2]} />
          </Grid>
          <Grid item>
            <WrappedForecast weather={weather.hourly[3]} />
          </Grid>
          <Grid item>
            <WrappedForecast weather={weather.hourly[4]} />
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <Grid item xs={10} />
          <Grid item xs={2}>
            <div className={classes.marginTop}>
              <WrappedForecast weather={weather.daily[0]} opacity={1}  />
            </div>
            <div className={classes.marginTop}>
              <WrappedForecast weather={weather.daily[1]} opacity={0.9} />
            </div>
            <div className={classes.marginTop}>
              <WrappedForecast weather={weather.daily[2]} opacity={0.8} />
            </div>
            <div className={classes.marginTop}>
              <WrappedForecast weather={weather.daily[3]} opacity={0.7} />
            </div>
            <div className={classes.marginTop}>
              <WrappedForecast weather={weather.daily[4]} opacity={0.6} />
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(withStyles(styles)(Weather));
