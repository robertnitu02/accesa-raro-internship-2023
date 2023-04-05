import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../../shared/models/weather.model';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  @Input() weatherModel: WeatherModel | undefined = undefined;

  weatherModelStringify: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.weatherModel);
    this.weatherModelStringify = JSON.stringify(this.weatherModel);
  }
}
