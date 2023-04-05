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

  getWeather(cityName: string, lat = -1, lon = -1): Observable<WeatherModel> {
    const location =
      lat === -1 && lon === -1 ? `q=${cityName}` : `lat=${lat}&lon=${lon}`;
    return this.http.get<WeatherModel>(
      APIConstants.baseUrl +
        location +
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
