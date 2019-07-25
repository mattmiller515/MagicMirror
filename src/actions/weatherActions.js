import axios from 'axios';

import { config } from '../config/config';

export const retrieveWeather = () => (dispatch, getState) => {
  let WEATHER_API_URL = 'http://dataservice.accuweather.com/currentconditions/v1/' + config.WEATHER_LOCATION_KEY + '?apikey=' + config.WEATHER_KEY;
  let HOURLY_API_URL = 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + config.WEATHER_LOCATION_KEY + '?apikey=' + config.WEATHER_KEY;
  let DAILY_API_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + config.WEATHER_LOCATION_KEY + '?apikey=' + config.WEATHER_KEY;

  dispatch({
    type: 'RETRIEVE_WEATHER',
    payload: axios.get(WEATHER_API_URL)
  });

  dispatch({
    type: 'RETRIEVE_HOURLY_FORECAST',
    payload: axios.get(HOURLY_API_URL)
  })

  dispatch({
    type: 'RETRIEVE_DAILY_FORECAST',
    payload: axios.get(DAILY_API_URL)
  })
};