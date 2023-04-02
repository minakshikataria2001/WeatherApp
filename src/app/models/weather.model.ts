// export interface WeatherData {
//   cloud_pct: number
//   temp: number
//   feels_like: number
//   humidity: number
//   min_temp: number
//   max_temp: number
//   wind_speed: number
//   wind_degrees: number
//   sunrise: number
//   sunset: number
// }


export interface WeatherData {


    location: {
      name: string;
      region: string;
      country: string;
      lat: number;
      lon: number;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
    };
     current: {
      last_updated_epoch: number;
      last_updated: string;
      temp_c: number;
      temp_f: number;
      is_day: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      wind_mph: number;
      wind_kph: number;
      wind_degree: number;
      wind_dir: string;
      pressure_mb: number;
      pressure_in: number;
      precip_mm: number;
      precip_in: number;
      humidity: number;
      cloud: number;
      feelslike_c: number;
      feelslike_f: number;
      vis_km: number;
      vis_miles: number;
      uv: number;
      gust_mph: number;
      gust_kph: number;
    };
  }
  
  const weatherData: WeatherData = {
    location: {
      name: "New Delhi",
      region: "Delhi",
      country: "India",
      lat: 28.6,
      lon: 77.2,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1680339793,
      localtime: "2023-04-01 14:33"
    },
    current: {
      last_updated_epoch: 1680339600,
      last_updated: "2023-04-01 14:30",
      temp_c: 26,
      temp_f: 78.8,
      is_day: 1,
      condition: {
        text: "Mist",
        icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
        code: 1030
      },
      wind_mph: 4.3,
      wind_kph: 6.8,
      wind_degree: 90,
      wind_dir: "E",
      pressure_mb: 1010,
      pressure_in: 29.83,
      precip_mm: 0.1,
      precip_in: 0,
      humidity: 54,
      cloud: 75,
      feelslike_c: 25.8,
      feelslike_f: 78.4,
      vis_km: 3.5,
      vis_miles: 2,
      uv: 6,
      gust_mph: 3.6,
      gust_kph: 5.8
    }
  };
  