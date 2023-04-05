import {
  coordinates,
  weather,
  main,
  wind,
  clouds,
  sys,
} from './weather-common.model';

export interface WeatherModel {
  coord: coordinates;
  weather: weather;
  base: string;
  main: main;
  visibility: number;
  wind: wind;
  clouds: clouds;
  dt: number;
  sys: sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
