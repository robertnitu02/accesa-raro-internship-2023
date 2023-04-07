import { Component, OnInit } from '@angular/core';
import { Dictionary } from 'src/shared/models/dictionary';
import { WeatherModel } from '../../shared/models/weather.model';
import { LocalStorageKeys } from '../../shared/constants/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoritesCity: Dictionary<WeatherModel> = {};
  favoritesCityList: { value: WeatherModel; key: string }[] = [];

  theme = 'clear';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initDataFromLocalStorage();

    if (this.favoritesCity) {
      this.favoritesCityList = Object.keys(this.favoritesCity).map((key) => {
        return { key: key, value: this.favoritesCity[key] };
      });
      console.log(JSON.stringify(this.favoritesCityList));
    }
  }

  removeCity(city: string) {
    delete this.favoritesCity[city];
    localStorage.setItem(
      LocalStorageKeys.favorites,
      JSON.stringify(this.favoritesCity)
    );
    console.log(JSON.stringify(this.favoritesCity));
    this.favoritesCityList = Object.keys(this.favoritesCity).map((key) => {
      return { key: key, value: this.favoritesCity[key] };
    });
  }

  /* --- UTILS --- */
  private initDataFromLocalStorage() {
    const data = localStorage.getItem(LocalStorageKeys.favorites);
    if (data !== null) this.favoritesCity = JSON.parse(data);

    const themeData = localStorage.getItem(LocalStorageKeys.theme);
    if (themeData) {
      this.theme = themeData;
    } else {
      this.theme = 'clear';
      localStorage.setItem(LocalStorageKeys.favorites, this.theme);
    }
  }

  beautifyTemp(temp: number) {
    return Math.floor(temp);
  }
}
