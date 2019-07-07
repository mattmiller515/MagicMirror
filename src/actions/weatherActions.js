import axios from 'axios';

import { config } from '../config/config';

export const retrieveWeather = () => dispatch => {
  var api_url =
    'http://dataservice.accuweather.com/currentconditions/v1/' +
    config.WEATHER_LOCATION_KEY +
    '?apikey=' +
    config.WEATHER_KEY;

  dispatch({
    type: 'RETRIEVE_WEATHER',
    payload: axios.get(api_url)
  });
};
