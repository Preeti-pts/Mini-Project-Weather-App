import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    const url = environment.weatherApiBaseUrl;

    const params = new HttpParams()
      .set('q', cityName)
      .set('appid', environment.openWeatherApiKey)
      .set('units', 'metric')
      .set('lang', 'en');

    return this.http.get<WeatherData>(url, { params });
  }
}
