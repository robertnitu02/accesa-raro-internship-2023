import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../../shared/models/weather.model';
import { WeatherForecastModel } from '../../shared/models/weather-forecast.model';
import { WeatherService } from '../../services/weather.service';
import { MatSliderChange } from '@angular/material/slider';
import { Dictionary } from 'src/shared/models/dictionary';
import { WeatherConditions } from '../../shared/constants/weather-conditions';
import { LocalStorageKeys } from '../../shared/constants/constants';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  @Input() weatherModel: WeatherModel | undefined = undefined;
  @Input() cityName: string = '';

  date: string = new Date().toLocaleString();
  theme = 'rain';

  forecastModel: WeatherForecastModel | undefined = undefined;
  numOfDays = 4;

  favoritesCity: Dictionary<WeatherModel> = {};
  favoriteIconsPath: string[] = [
    './../assets/images/favorite.png',
    './../assets/images/no-favorite.png',
  ];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // console.log(`cityName:`);
    // console.log(this.cityName);
    // console.log(`weatherModel:`);
    // console.log(this.weatherModel);

    this.getWeatherForecast(this.cityName, this.numOfDays);
    setInterval(() => {
      // console.log(this.date);
      this.date = new Date().toLocaleString();
    }, 1000);

    this.initDataFromLocalStorage();
  }

  getWeatherForecast(cityName: string, numOfDays: number) {
    this.weatherService.getWeatherForecast(cityName, numOfDays).subscribe({
      next: (res) => {
        this.forecastModel = res;
        console.log(`forecastModel: `);
        console.log(this.forecastModel);
      },
      error: (error) => console.log(error.message),
    });
  }

  addToFavorite() {
    console.log('enter');
    if (this.favoritesCity[this.cityName]) {
      console.log('deleted');
      delete this.favoritesCity[this.cityName];
    } else {
      if (this.weatherModel) {
        console.log('added ' + this.cityName);
        this.favoritesCity[this.cityName] = this.weatherModel;
      }
    }
    localStorage.setItem(
      LocalStorageKeys.favorites,
      JSON.stringify(this.favoritesCity)
    );
    console.log(JSON.stringify(this.favoritesCity));
  }

  /* --- UTILS --- */
  private initDataFromLocalStorage() {
    const favoritesData = localStorage.getItem(LocalStorageKeys.favorites);
    if (favoritesData !== null) this.favoritesCity = JSON.parse(favoritesData);
    console.log(
      'WeatherSearchComponent >>>' + JSON.stringify(this.favoritesCity)
    );

    const themeData = localStorage.getItem(LocalStorageKeys.theme);
    if (themeData) {
      this.theme = themeData;
    } else {
      this.theme = 'rain';
      localStorage.setItem(LocalStorageKeys.favorites, this.theme);
    }
  }

  beautifyTemp(temp: number) {
    return Math.floor(temp);
  }

  onSliderChange($event: MatSliderChange) {
    this.numOfDays = $event.value as number;
    this.getWeatherForecast(this.cityName, this.numOfDays);
    console.log($event.value);
  }
}
