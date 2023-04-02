import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';  
import { WeatherData } from './models/weather.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 constructor(private weatherService: WeatherService){
  
 }
 
 cityname: string = "" ;
 weatherData?: WeatherData;
 location: string = "";
 temp : number = 0;
 humidity: number=0;
 wind: number =0 ;
  ngOnInit(): void {
  
    this.weatherService.getWeatherData("landon")
  .subscribe({

    next: (response)=> {

     this.weatherData = response;
     this.location = this.weatherData.location.name ;
     this.temp = this.weatherData.current.temp_c;
     this.humidity = this.weatherData.current.humidity;
     this.wind = this.weatherData.current.wind_kph;
      // console.log(response);
      console.log(this.weatherData);
      // console.log(this.weatherData.current.temp_c);   
       
    }
  });

  }
  onSubmit() {

console.log(this.cityname);
// this.cityname='';
this.weatherService.getWeatherData(this.cityname)
.subscribe({

  next: (response)=> {

   this.weatherData = response;
   
    // console.log(response);
     this.location = this.weatherData.location.name ;
     this.temp = this.weatherData.current.temp_c;
     this.humidity = this.weatherData.current.humidity;
     this.wind = this.weatherData.current.wind_kph;
  this.cityname = "";
    console.log(this.weatherData.location);
    console.log(this.weatherData.current);
    
    // console.log(this.weatherData.current.temp_c);   
     
  }
});

}

}



  


  //  
    // this.GetWeatherData(this.cityName); 
  // }
  
  //  this.GetWeatherData(this.cityName);
  //  this.cityName =  '';
  
  // private GetWeatherData(cityName:string){
    
  // }
// }
