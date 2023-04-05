export interface coordinates {
  lon: number;
  lat: number;
}

export interface weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}

export interface wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface clouds {
  all: number;
}

export interface sys {
  pod?: number;
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}

export interface list {
  dt: number;
  main: main;
  weather: weather;
  clouds: clouds;
  wind: wind;
  visibility: number;
  pop: number;
  dt_text: string;
}

export interface city {
  id: number;
  name: string;
  coord: coordinates;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}
