import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APIConstants } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByCityName(cityName: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIConstants.weatherApiMapKey}&units=${APIConstants.units}`
    );
  }

  getWeatherByCoordinates(lat: number, lon: number) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIConstants.weatherApiMapKey}&units=${APIConstants.units}`
    );
  }

  getForecastByDays(cityName: string, numOfDays: number) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${numOfDays}&appid=${APIConstants.weatherApiMapKey}&units=${APIConstants.units}`
    );
  }

  getForecastByHours(cityName: string, numOfHours: number) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&cnt=${numOfHours}&appid=${APIConstants.weatherApiMapKey}&units=${APIConstants.units}`
    );
  }
}
