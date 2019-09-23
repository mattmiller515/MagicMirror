import React from 'react';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiDayHaze, WiNightFog, WiDayShowers, WiNightAltShowers, WiDayThunderstorm, WiNightAltThunderstorm, WiDaySleet, WiNightAltSleet, WiDaySnow, WiNightAltSnow, WiCloud, WiCloudy, WiFog, WiShowers, WiThunderstorm, WiRain, WiRainMix, WiSleet, WiSnow, WiHot, WiSnowflakeCold, WiStrongWind, WiNA } from 'weather-icons-react';
import moment from 'moment';

const largeIconSize = 100;
const smallIconSize = 50;

const defaultState = {
  current: {
    weather: 'Partly Cloudy w/ Flurries',
    temperature: '72',
    weatherIcon: <WiDaySunny color='#FFF' size={largeIconSize} />
  },
  hourly: [
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: '12 PM',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    },
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: '12 PM',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    },
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: '12 PM',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    },
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: '12 PM',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    },
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: '12 PM',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    }
  ],
  daily: [
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: 'Mon',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    },
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: 'Tue',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    },
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: 'Wed',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    },
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: 'Thu',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    },
    {
      weather: 'Partly Cloudy w/ Flurries',
      temperature: '72',
      dateTime: 'Fri',
      weatherIcon: <WiDaySunny color='#FFF' size={smallIconSize} />
    }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'RETRIEVE_WEATHER_FULFILLED':
      let data = action.payload.data[0];
      let weatherString = data.WeatherText.replace(/\b\w/g, l => l.toUpperCase());
      return {
        ...state,
        current: {
          weather: weatherString,
          temperature: data.Temperature.Imperial.Value,
          isDay: data.IsDayTime,
          weatherIcon: determineWeatherIcon(weatherString, data.IsDayTime, largeIconSize)
        }
      };

    case 'RETRIEVE_HOURLY_FORECAST_FULFILLED':
      let hourlyList = [];
      for (let hourlyWeather of action.payload.data) {
        let weatherText = hourlyWeather.IconPhrase.replace(/\b\w/g, l => l.toUpperCase());
        let temperature = hourlyWeather.Temperature.Value;
        let isDay = hourlyWeather.IsDaylight
        let time = moment(hourlyWeather.DateTime, 'YYYY-MM-DDTHH:mm:ss').format('ha');
        hourlyList.push({
          weather: weatherText,
          temperature: temperature,
          dateTime: time,
          weatherIcon: determineWeatherIcon(weatherText, isDay, smallIconSize)
        })
      }
      return {
        ...state,
        hourly: hourlyList
      }

    case 'RETRIEVE_DAILY_FORECAST_FULFILLED':
      let dailyList = [];
      for (let dailyWeather of action.payload.data.DailyForecasts) {
        let weatherText = dailyWeather.Day.IconPhrase.replace(/\b\w/g, l => l.toUpperCase());
        let temperature = dailyWeather.Temperature.Maximum.Value;
        let isDay = true
        let time = moment(dailyWeather.Date, 'YYYY-MM-DDTHH:mm:ss').format('ddd');
        dailyList.push({
          weather: weatherText,
          temperature: temperature,
          dateTime: time,
          weatherIcon: determineWeatherIcon(weatherText, isDay, smallIconSize)
        })
      }
      return {
        ...state,
        daily: dailyList
      }

    default:
      return state;
  }
};



//helper functions
const clearList = ['sunny', 'clear', 'mostly clear', 'mostly sunny'];
const partlyCloudyList = ['partly cloudy', 'partly sunny', 'mostly cloudy', 'intermittent clouds'];
const hazeList = ['hazy sunshine', 'hazy moonlight'];
const cloudList = ['cloudy'];
const cloudyList = ['overcast'];
const fogList = ['fog'];
const showersList = ['showers', 'light rain', 'drizzle'];
const partlyShowersList = ['mostly cloudy w/ showers', 'partly cloudy w/ showers'];
const thunderstormsList = ['t-storms', 'thunderstorms'];
const partlyThunderstormsList = ['mostly cloudy w/ thunderstorms', 'partly cloudy w/ thunderstorms', 'partly cloudy w/ t-storms', 'partly sunny w/ t-storms'];
const rainList = ['rain'];
const rainMixList = ['sleet', 'freezing rain'];
const sleetList = ['flurries'];
const partlySleet = ['mostly cloudy w/ flurries', 'partly cloudy w/ flurries'];
const snowList = ['snow'];
const partlySnowList = ['mostly cloudy w/ snow'];
const hotList = ['hot'];
const coldList = ['cold'];
const windList = ['windy'];


const determineWeatherIcon = (weatherString, isDay, iconSize) => {

  weatherString = weatherString.toLowerCase();
  let weatherIcon;

  if (cloudList.includes(weatherString)) {
    weatherIcon = <WiCloud color='#FFF' size={iconSize} />
  } else if (cloudyList.includes(weatherString)) {
    weatherIcon = <WiCloudy color='#FFF' size={iconSize} />
  } else if (fogList.includes(weatherString)) {
    weatherIcon = <WiFog color='#FFF' size={iconSize} />
  } else if (showersList.includes(weatherString)) {
    weatherIcon = <WiShowers color='#FFF' size={iconSize} />
  } else if (thunderstormsList.includes(weatherString)) {
    weatherIcon = <WiThunderstorm color='#FFF' size={iconSize} />
  } else if (rainList.includes(weatherString)) {
    weatherIcon = <WiRain color='#FFF' size={iconSize} />
  } else if (rainMixList.includes(weatherString)) {
    weatherIcon = <WiRainMix color='#FFF' size={iconSize} />
  } else if (sleetList.includes(weatherString)) {
    weatherIcon = <WiSleet color='#FFF' size={iconSize} />
  } else if (snowList.includes(weatherString)) {
    weatherIcon = <WiSnow color='#FFF' size={iconSize} />
  } else if (hotList.includes(weatherString)) {
    weatherIcon = <WiHot color='#FFF' size={iconSize} />
  } else if (coldList.includes(weatherString)) {
    weatherIcon = <WiSnowflakeCold color='#FFF' size={iconSize} />
  } else if (windList.includes(weatherString)) {
    weatherIcon = <WiStrongWind color='#FFF' size={iconSize} />
  } else if (clearList.includes(weatherString)) {
    weatherIcon = isDay ? <WiDaySunny color='#FFF' size={iconSize} /> : <WiNightClear color='#FFF' size={iconSize} />;
  } else if (partlyCloudyList.includes(weatherString)) {
    weatherIcon = isDay ? <WiDayCloudy color='#FFF' size={iconSize} /> : <WiNightAltCloudy color='#FFF' size={iconSize} />;
  } else if (hazeList.includes(weatherString)) {
    weatherIcon = isDay ? <WiDayHaze color='#FFF' size={iconSize} /> : <WiNightFog color='#FFF' size={iconSize} />;
  } else if (partlyShowersList.includes(weatherString)) {
    weatherIcon = isDay ? <WiDayShowers color='#FFF' size={iconSize} /> : <WiNightAltShowers color='#FFF' size={iconSize} />;
  } else if (partlyThunderstormsList.includes(weatherString)) {
    weatherIcon = isDay ? <WiDayThunderstorm color='#FFF' size={iconSize} /> : <WiNightAltThunderstorm color='#FFF' size={iconSize} />;
  } else if (partlySleet.includes(weatherString)) {
    weatherIcon = isDay ? <WiDaySleet color='#FFF' size={iconSize} /> : <WiNightAltSleet color='#FFF' size={iconSize} />;
  } else if (partlySnowList.includes(weatherString)) {
    weatherIcon = isDay ? <WiDaySnow color='#FFF' size={iconSize} /> : <WiNightAltSnow color='#FFF' size={iconSize} />;
  } else {
    weatherIcon = <WiNA color='#FFF' size={iconSize} />
  }

  return weatherIcon;

}