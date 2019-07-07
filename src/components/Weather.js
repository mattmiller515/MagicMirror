import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';

import { retrieveWeather } from '../actions/weatherActions';

const styles = {};

export class Weather extends Component {
  componentDidMount() {
    this.props.retrieveWeather();
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.weather.currentWeather}</h1>
        <h1>{this.props.weather.currentTemperature}</h1>
        <h1>{this.props.weather.isDay.toString()}</h1>
      </React.Fragment>
    );
  }

  //   retrieveWeather = () => {
  //     var api_url =
  //       'http://dataservice.accuweather.com/currentconditions/v1/' +
  //       config.WEATHER_LOCATION_KEY +
  //       '?apikey=' +
  //       config.WEATHER_KEY;

  //     let currentComponent = this;

  //     axios.get(api_url).then(function(response) {
  //       var data = response['data'][0];

  //       var weatherText = data['WeatherText'].replace(/\b\w/g, l =>
  //         l.toUpperCase()
  //       );
  //       var temp = data['Temperature']['Imperial']['Value'];
  //       var isDay = data['IsDayTime'];

  //       currentComponent.setState({ weatherText: weatherText });
  //       currentComponent.setState({ temperature: temp });
  //       currentComponent.setState({ isDay: isDay });

  //       currentComponent.determineWeatherIcon(weatherText, isDay);
  //     });
  //   };
}

const mapStateToProps = state => ({
  weather: state.weather
});

const mapDispatchToProps = dispatch => ({
  retrieveWeather: () => dispatch(retrieveWeather())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Weather));
