const defaultState = {
  currentWeather: 'Sunny',
  currentTemperature: '72',
  isDay: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'RETRIEVE_WEATHER_FULFILLED':
      let data = action.payload['data'][0];
      return {
        ...state,
        currentWeather: data['WeatherText'].replace(/\b\w/g, l =>
          l.toUpperCase()
        ),
        currentTemperature: data['Temperature']['Imperial']['Value'],
        isDay: data['IsDayTime']
      };
    case 'UPDATE_WEATHER_ICON':
      return {
        ...state,
        weatherIcon: action.payload
      };
    default:
      return state;
  }
};
