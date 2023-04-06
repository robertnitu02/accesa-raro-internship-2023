import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { constants } from '../shared/constants/constants';
import { WeatherModel } from '../shared/models/weather.model';
import { coordinates } from '../shared/models/weather-common.model';
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
  viewStates = ViewState;

  currentViewState = this.viewStates.HOME;
  coordinates: coordinates = {
    lat: -1,
    lon: -1,
  };

  weatherData: WeatherModel | undefined = undefined;

  city: string = '';
  cityFound = true;
  showWeather = false;
  firstUse = true;
  showWeatherTimeout: any | undefined = undefined;

  inputText: string = this.city;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.initWeather();
  }

  sendWeatherData() {
    if (!this.firstUse && this.city === this.inputText) return;
    if (this.showWeatherTimeout) return;
    if (this.firstUse) this.firstUse = false;

    this.searchForWeatherCityDelay();
    console.log(this.inputText);
    this.getWeather(this.inputText);
  }

  /* --- Init Weather first interaction ---- */
  initWeather(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          if (position) {
            this.coordinates.lat = position.coords.latitude;
            this.coordinates.lon = position.coords.longitude;
            console.log(JSON.stringify(this.coordinates));
            this.getWeatherByCoordinates(
              this.coordinates.lat,
              this.coordinates.lon
            );
            this.firstUse = false;
            this.searchForWeatherCityDelay();
          }
        },
        (error: any) => console.log(error)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  /* --- Get Weather functions ---- */
  getWeather(cityName: string) {
    if (this.city === cityName) return;
    this.city = cityName;
    this.weatherService.getWeather(cityName).subscribe({
      next: (res) => {
        this.weatherData = res;
        this.cityFound = true;
        console.log(`getWeather: ${JSON.stringify(this.weatherData)}`);
      },
      error: (error) => {
        if (this.showWeatherTimeout && !this.showWeather) {
          clearTimeout(this.showWeatherTimeout);
          this.showWeatherTimeout = undefined;
        }
        this.cityFound = false;
        console.log(error.message);
      },
    });
  }

  getWeatherByCoordinates(lat: number, lon: number): void {
    this.weatherService.getWeatherByCoordinates(lat, lon).subscribe({
      next: (res) => {
        this.weatherData = res;
        this.city = this.weatherData.name;
        this.inputText = this.city;
        console.log('getWeatherByCoordinates:');
        console.log(this.weatherData);
      },
      error: (error) => console.log(error.message),
    });
  }

  /* --- Utils ---- */
  private IsCoordinatesValid() {
    return this.coordinates.lat !== -1 && this.coordinates.lon !== -1;
  }

  private searchForWeatherCityDelay() {
    this.showWeather = false;
    this.showWeatherTimeout = setTimeout(() => {
      this.showWeather = true;
      this.showWeatherTimeout = undefined;
    }, 1000);
  }
}
