import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../../shared/models/weather.model';
import { WeatherForecastModel } from '../../shared/models/weather-forecast.model';
import { MatSliderChange } from '@angular/material/slider';
import { Dictionary } from 'src/shared/models/dictionary';
import {
  DefaultValues,
  LocalStorageKeys,
} from '../../shared/constants/constants';
import { TranslateService } from '@ngx-translate/core';
import { list } from '../../shared/models/weather-common.model';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  @Input() weatherData: WeatherModel | undefined = undefined;
  @Input() forecastData: WeatherForecastModel | undefined = undefined;
  @Input() cityName: string = '';

  date: Date = new Date();
  theme = DefaultValues.theme;

  showForecastList: list[] = [];
  forecastDateList: Date[] = [];
  numOfDays = 4;

  favoritesCity: Dictionary<WeatherModel> = {};
  favoriteIconsPath: string[] = [
    'assets/images/favorite.png',
    'assets/images/no-favorite.png',
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // console.log(`cityName:`);
    // console.log(this.cityName);
    // console.log(`weatherModel:`);
    // console.log(this.weatherModel);
    // console.log('forecastModel:');
    // console.log(this.forecastData);
    setInterval(() => {
      this.date = new Date();
    }, 10000);

    this.initDataFromLocalStorage();
    this.initForecastList();
  }

  /* --- Add to Favorite Functionality --- */
  addToFavorite() {
    const cityName = this.toNormalForm(this.cityName);
    if (this.favoritesCity[cityName]) {
      delete this.favoritesCity[cityName];
    } else {
      if (this.weatherData) {
        this.favoritesCity[cityName] = this.weatherData;
      }
    }
    localStorage.setItem(
      LocalStorageKeys.favorites,
      JSON.stringify(this.favoritesCity)
    );
    // console.log(JSON.stringify(this.favoritesCity));
  }

  /* --- Utils --- */
  private initDataFromLocalStorage() {
    const favoritesData = localStorage.getItem(LocalStorageKeys.favorites);
    if (favoritesData !== null) this.favoritesCity = JSON.parse(favoritesData);
    // console.log(
    //   'WeatherSearchComponent >>>' + JSON.stringify(this.favoritesCity)
    // );

    const themeData = localStorage.getItem(LocalStorageKeys.theme);
    if (themeData) {
      this.theme = themeData;
    } else {
      this.theme = DefaultValues.theme;
      localStorage.setItem(LocalStorageKeys.favorites, this.theme);
    }
  }

  private initForecastList() {
    if (this.forecastData) {
      this.forecastDateList = [];
      for (let i = 0; i < this.numOfDays; i++) {
        let tmpDate = new Date();
        tmpDate.setDate(tmpDate.getDate() + i);
        this.forecastDateList.push(tmpDate);
      }
      this.showForecastList = this.forecastData.list.slice(0, this.numOfDays);
      // console.log('this.showForecastList');
      // console.log(this.showForecastList);
    }
  }

  onSliderChange($event: MatSliderChange) {
    this.numOfDays = $event.value as number;
    this.initForecastList();
    // console.log($event.value);
  }

  toNormalForm(string: string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  beautifyTemp(temp: number) {
    return Math.floor(temp);
  }
}
