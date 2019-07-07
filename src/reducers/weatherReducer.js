const defaultState = {
  currentWeather: 'Sunny',
  currentTemperature: 'N/A',
  isDay: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'RETRIEVE_WEATHER_FULFILLED':
      return {
        ...state,
        currentWeather: action.payload['WeatherText'].replace(/\b\w/g, l =>
          l.toUpperCase()
        ),
        currentTemperature: action.payload['Temperature']['Imperial']['Value'],
        isDay: action.payload['IsDayTime']
      };
    default:
      return state;
  }
};
