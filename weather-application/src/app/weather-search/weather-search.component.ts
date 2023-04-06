import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../../shared/models/weather.model';
import { WeatherForecastModel } from '../../shared/models/weather-forecast.model';
import { WeatherService } from '../../services/weather.service';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  @Input() weatherModel: WeatherModel | undefined = undefined;
  @Input() cityName: string = '';

  date: string = new Date().toLocaleString();

  forecastModel: WeatherForecastModel | undefined = undefined;
  numOfDays = 4;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    console.log(`cityName:`);
    console.log(this.cityName);
    console.log(`weatherModel:`);
    console.log(this.weatherModel);
    this.getWeatherForecast(this.cityName, this.numOfDays);
    setInterval(() => {
      // console.log(this.date);
      this.date = new Date().toLocaleString();
    }, 1000);
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

  onSliderChange($event: MatSliderChange) {
    this.numOfDays = $event.value as number;
    this.getWeatherForecast(this.cityName, this.numOfDays);
    console.log($event.value);
  }
}
