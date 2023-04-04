import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { constants } from '../shared/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-application';
  city: string = 'Pucioasa';
  myWeather: any;
  myWeatherStringify: any;

  lat: number = -1;
  lon: number = -1;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.initWeatherByLocation();
  }

  change(): void {
    this.getForecastByDays();
  }

  initWeatherByLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          if (position) {
            // console.log(
            //   `lat: ${position.coords.latitude} | lon: ${position.coords.longitude}`
            // );
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
            this.getWeatherByCoordinates();
          } else {
            this.city = constants.startupCity;
            this.getWeatherByCityName(this.city);
          }
        },
        (error: any) => {
          console.log(error);
          this.city = constants.startupCity;
          this.getWeatherByCityName(this.city);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      this.city = constants.startupCity;
      this.getWeatherByCityName(this.city);
    }
  }

  getWeatherByCityName(cityName: string) {
    this.weatherService.getWeatherByCityName(cityName).subscribe({
      next: (res) => {
        this.myWeather = res;
        console.log(`getWeatherByCityName: ${this.myWeather}`);
        this.myWeatherStringify = JSON.stringify(res);
      },
      error: (error) => console.log(error.message),
      complete: () => console.log('API Call Completed'),
    });
  }

  getWeatherByCoordinates() {
    this.weatherService.getWeatherByCoordinates(this.lat, this.lon).subscribe({
      next: (res) => {
        this.myWeather = res;
        console.log(`getWeatherByCoordinates: ${this.myWeather}`);
        this.myWeatherStringify = JSON.stringify(res);
      },
      error: (error) => console.log(error.message),
      complete: () => console.log('API Call Completed'),
    });
  }

  getForecastByDays() {
    this.weatherService.getForecastByDays(this.city, 5).subscribe({
      next: (res) => {
        this.myWeather = res;
        console.log(`getForecastByDays: ${this.myWeather}`);
        console.log(`days: ${JSON.stringify(this.myWeather.list[0])}`);
        this.myWeatherStringify = JSON.stringify(res);
      },
      error: (error) => console.log(error.message),
      complete: () => console.log('API Call Completed'),
    });
  }
}
