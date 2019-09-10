import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = {
  temperature: {
    fontSize: 150
  },
  weatherText: {
    maxWidth: 100,
    fontSize: 17
  },
  marginTop: {
    marginTop: 20,
  },
  forecastText: {
    maxWidth: 75,
    fontSize: 10
  },
  wideForecastText: {
    maxWidth: 100,
    fontSize: 10
  },
  dailyForcast: {
    marginTop: 16
  },
  container: {
    overflowX: 'hidden'
  }
};

const Forecast = (props) => {
  const { classes, opacity, wide } = props;
  const { weather, temperature, dateTime, weatherIcon } = props.weather;

  return (
    <React.Fragment>
      <div style={{ opacity: opacity }}>
        <Typography variant='subtitle1'>{dateTime}</Typography>
        <Grid container justify='center'>
          <Grid item>
            {weatherIcon}
          </Grid>
          <Grid item>
            {temperature}&#176;
          </Grid>
        </Grid>
        <Typography variant='subtitle2' className={wide ? classes.wideForecastText : classes.forecastText}>{weather}</Typography>
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
        <div className={classes.container}>
          <Grid container justify='flex-start' alignItems='center'>
            <Grid item>
              <Typography variant='h3' className={classes.temperature}>
                {weather.current.temperature}&#176;
              </Typography>
            </Grid>
            <Grid item>
              {weather.current.weatherIcon}
              <Typography variant='h5' className={classes.weatherText}>
                {weather.current.weather}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} justify='flex-end' className={classes.marginTop}>
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
            <Grid item xs={9} />
            <Grid item xs={3}>
              <div className={classes.dailyForcast}>
                <WrappedForecast weather={weather.daily[0]} wide opacity={1} />
              </div>
              <div className={classes.dailyForcast}>
                <WrappedForecast weather={weather.daily[1]} wide opacity={0.85} />
              </div>
              <div className={classes.dailyForcast}>
                <WrappedForecast weather={weather.daily[2]} wide opacity={0.70} />
              </div>
              <div className={classes.dailyForcast}>
                <WrappedForecast weather={weather.daily[3]} wide opacity={0.55} />
              </div>
              <div className={classes.dailyForcast}>
                <WrappedForecast weather={weather.daily[4]} wide opacity={0.40} />
              </div>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(withStyles(styles)(Weather));
