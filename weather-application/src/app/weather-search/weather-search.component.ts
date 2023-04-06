import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../../shared/models/weather.model';
import { WeatherForecastModel } from '../../shared/models/weather-forecast.model';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  @Input() weatherModel: WeatherModel | undefined = undefined;
  @Input() forecastModel: WeatherForecastModel | undefined = undefined;

  stringifyW = '';
  stringifyFW = '';

  constructor() {}

  ngOnInit(): void {
    console.log(`weatherModel:`);
    console.log(this.weatherModel);
    this.stringifyW = JSON.stringify(this.weatherModel);
    console.log(`forecastModel:`);
    console.log(this.forecastModel);
    this.stringifyFW = JSON.stringify(this.forecastModel);
  }
}
