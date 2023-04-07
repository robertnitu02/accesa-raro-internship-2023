import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-city-not-found',
  templateUrl: './city-not-found.component.html',
  styleUrls: ['./city-not-found.component.scss'],
})
export class CityNotFoundComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}
}
