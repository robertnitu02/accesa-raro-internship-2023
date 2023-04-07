import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-enter-city',
  templateUrl: './enter-city.component.html',
  styleUrls: ['./enter-city.component.scss'],
})
export class EnterCityComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}
}
