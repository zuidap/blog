/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';

const KEY = '2ec740e90b48d10dd5e18d4ce78cf311';
const PORT = 'https://restapi.amap.com/v3';

function useWeather() {
  const [info, setInfo] = useState({
    city: '北京',
    temp: '...',
    iconPath: '/lottie/weather/cloudy-03.json',
    weather: '',
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const cityJson = (await axios.get(`${PORT}/ip?key=${KEY}`)).data;
    const url = `${PORT}/weather/weatherInfo?city=${cityJson?.adcode}&key=${KEY}`;
    const weatherJson = (await axios.get(url)).data;

    // console.log(weatherJson);
    if (weatherJson && weatherJson?.status === '1') {
      const weathers = weatherJson?.lives[0];
      const city = weathers?.city;
      const temp = weathers?.temperature;
      const weather = weathers?.weather;
      const iconPath = getIcon(weather);
      setInfo({ city, temp, iconPath, weather });
    }
  }

  return info;
}
export default useWeather;

function getIcon(weather) {
  // console.log(weather);
  const path = '/lottie/weather/';
  let we = weather;
  // 获取当前时间
  let timeNow = new Date();
  // 获取当前几号
  let day = timeNow.getDate();
  // 获取当前小时
  let hours = timeNow.getHours();
  // 判断当前时间段
  if (hours <= 6 || hours >= 18) {
    we = '夜' + we;
    if (day === 15) {
      we = '满月';
    }
  }
  let jsonName = weathers
    .filter((item) => item.name === we)
    .map((item) => item.path)[0];

  if (jsonName === undefined) {
    jsonName = weathers
      .filter((item) => item.name === weather)
      .map((item) => item.path)[0];
  }
  console.log(we);
  console.log(weather);
  return path + jsonName;
}

const weathers = [
  { name: '晴', path: 'sunny-day.json', description: '白天、晴、无云' },
  { name: '多云', path: 'cloudy-02.json', description: '白天、晴、少云' },
  { name: '阴', path: 'cloudy.json', description: '白天、晴、多云' },
  { name: '小雨', path: 'cloudy-and-rainny.json', description: '白天、小雨' },

  { name: '夜晴', path: 'sunny-hight.json', description: '夜晚、晴、无云' },
  { name: '夜多云', path: 'night.json', description: '夜晚、晴、少云' },
  { name: '夜阴', path: 'night-cloudy.json', description: '夜晚、晴、多云' },
  { name: '夜雨', path: 'night-rain.json', description: '夜晚、雨' },
  { name: '夜小雨', path: 'night-rain.json', description: '夜晚、雨' },

  { name: '霾', path: 'fog.json', description: '雾霾' },
  { name: '扬沙', path: 'fog.json', description: '扬沙' },
  { name: '浮尘', path: 'fog.json', description: '浮尘' },
  { name: '雪', path: 'light-snow.json', description: '雪' },
  { name: '雨', path: 'Rain.json', description: '雨' },

  { name: '满月', path: 'full-moon.json', description: '满月' },
  { name: '雷雨', path: 'night-rain-and-storm.json', description: '雷雨' },
  { name: '雷电', path: 'thunder.json', description: '雷电' },
  { name: '台风', path: 'typhoon.json', description: '台风' },
  { name: '阴天', path: 'cloudy-03.json', description: '阴天' },
];
