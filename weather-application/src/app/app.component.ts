import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { constants } from '../shared/constants/constants';
import { WeatherModel } from '../shared/models/weather.model';
import { WeatherForecastModel } from '../shared/models/weather-forecast.model';

export enum ViewState {
  HOME,
  FAVORITES,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-application';
  viewStates = ViewState;

  currentViewState = this.viewStates.HOME;
  viewWeatherByCity = false;

  city: string = constants.startupCity;
  myWeather: WeatherModel | undefined = undefined;
  myWeatherForecast: WeatherForecastModel | undefined = undefined;

  inputText: string = this.city;

  myWeatherStringify: any;
  myWeatherForecastStringify: any;

  lat: number = -1;
  lon: number = -1;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.initWeather();
  }

  search(): void {
    this.viewWeatherByCity = false;
    setTimeout(() => {
      this.viewWeatherByCity = true;
    }, 1000);
    this.city = this.inputText;
    this.getWeather(this.city);
  }

  /* --- Init Weather first Connect */
  initWeather(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
            this.getWeather(this.city, this.lat, this.lon);
          }
        },
        (error: any) => {
          console.log(error);
          this.city = constants.startupCity;
          this.getWeather(this.city);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      this.city = constants.startupCity;
      this.getWeather(this.city);
    }
  }

  /* --- Get Weather functions */
  getWeather(cityName: string, lat = -1, lon = -1) {
    this.weatherService.getWeather(cityName, lat, lon).subscribe({
      next: (res) => {
        this.myWeather = res;
        if (lat !== -1 && lon !== -1) {
          this.city = this.myWeather.name;
          this.inputText = this.city;
        }
        console.log(`getWeather: ${this.myWeather}`);
        this.myWeatherStringify = JSON.stringify(res);
      },
      error: (error) => console.log(error.message),
    });
  }

  getWeatherForecast() {
    this.weatherService.getWeatherForecast(this.city, 5).subscribe({
      next: (res) => {
        this.myWeatherForecast = res;
        console.log(`getWeatherForecast: ${this.myWeatherForecast}`);
        this.myWeatherForecastStringify = JSON.stringify(res);
      },
      error: (error) => console.log(error.message),
    });
  }
}
