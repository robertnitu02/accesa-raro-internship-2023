import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APIConstants } from '../shared/constants/constants';
import { WeatherModel } from '../shared/models/weather.model';
import { Observable } from 'rxjs';
import { WeatherForecastModel } from '../shared/models/weather-forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByCoordinates(lat: number, lon: number): Observable<WeatherModel> {
    return this.http.get<WeatherModel>(
      APIConstants.baseUrl +
        `lat=${lat}&lon=${lon}` +
        `&appid=${APIConstants.weatherApiMapKey}&units=${APIConstants.units}`
    );
  }

  getWeather(cityName: string): Observable<WeatherModel> {
    return this.http.get<WeatherModel>(
      APIConstants.baseUrl +
        `q=${cityName}` +
        `&appid=${APIConstants.weatherApiMapKey}&units=${APIConstants.units}`
    );
  }

  getWeatherForecast(
    cityName: string,
    numOfDays: number
  ): Observable<WeatherForecastModel> {
    return this.http.get<WeatherForecastModel>(
      APIConstants.forecastUrl +
        `q=${cityName}` +
        `&cnt=${numOfDays}` +
        `&appid=${APIConstants.weatherApiMapKey}&units=${APIConstants.units}`
    );
  }
}
