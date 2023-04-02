import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WeatherData } from "src/app/models/weather.model";
// import { WeatherService } from './services/weather.service';

// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  

  constructor(private http:HttpClient) {
  }
    getWeatherData(cityname : string): Observable<WeatherData>
    {
    //   return  this.http.get<WeatherData>(environment.weatherApiBaseUrl , {
    //       headers : new HttpHeaders()
    //        .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeadervalue)
    //        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeadervalue),
    //        params : new HttpParams()
    //        .set('q', 'Delhi')
    //     })
    return  this.http.get<WeatherData>("https://weatherapi-com.p.rapidapi.com/current.json" , {
        headers : new HttpHeaders()
         .set("X-RapidAPI-Host","weatherapi-com.p.rapidapi.com")
         .set("X-RapidAPI-Key","23a1d3efe9msh28a4ecb0a7de33dp1fcfc0jsn58a6d7537134"),
         params : new HttpParams()
         .set('q', cityname)
      })
   }
}
