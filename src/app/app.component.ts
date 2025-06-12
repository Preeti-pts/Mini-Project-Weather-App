import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WeatherService } from './services/weather';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  
  cityName: string = 'Pune';
  weatherInfo?: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ' ';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ' ';
  }

  private getWeatherData(cityName : string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (data) => {
        console.log('Weather Data:', data);
        this.weatherInfo = data;
      },
      error: (err) => {
        console.error('Error fetching weather:', err);
      }
    });
  }
}
