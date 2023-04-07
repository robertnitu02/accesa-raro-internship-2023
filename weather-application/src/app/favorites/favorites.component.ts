import { Component, OnInit } from '@angular/core';
import { Dictionary } from 'src/shared/models/dictionary';
import { WeatherModel } from '../../shared/models/weather.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoritesCity: Dictionary<WeatherModel> = {};
  favoritesCityList: { value: WeatherModel; key: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    const data = localStorage.getItem('FavoriteData');
    if (data !== null) this.favoritesCity = JSON.parse(data);
    console.log('FavoritesComponent >>>' + JSON.stringify(this.favoritesCity));

    if (this.favoritesCity) {
      this.favoritesCityList = Object.keys(this.favoritesCity).map((key) => {
        return { key: key, value: this.favoritesCity[key] };
      });
      console.log(JSON.stringify(this.favoritesCityList));
    }
  }

  removeCity(city: string) {
    delete this.favoritesCity[city];
    localStorage.setItem('FavoriteData', JSON.stringify(this.favoritesCity));
    console.log(JSON.stringify(this.favoritesCity));
    this.favoritesCityList = Object.keys(this.favoritesCity).map((key) => {
      return { key: key, value: this.favoritesCity[key] };
    });
  }
}
