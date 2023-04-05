import { list, city } from './weather-common.model';

export interface WeatherForecastModel {
  cod: string;
  message: number;
  cnt: number;
  list: list[];
  city: city;
}
