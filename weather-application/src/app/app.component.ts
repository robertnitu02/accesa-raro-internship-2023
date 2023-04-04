import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-application';
  city: string = 'Pucioasa';
  myWeather: any;
  myWeatherStringify: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
      },
      error: (error) => console.log(error.message),
      complete: () => console.log('API Call Completed')
    })
  }

  change(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.myWeatherStringify = JSON.stringify(res);
      },
      error: (error) => console.log(error.message),
      complete: () => console.log('API Call Completed')
    })
  }
}
