import { Component } from '@angular/core';
import { MapPoint } from './mappoint';
import { OpenWeatherService } from '../../services/openweather.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  public title: string;
  public defaultCenter;
  public center;
  public nombresCiudades: Array<string>;
  public listaCiudades: Array<MapPoint>;

  public weatherData: any = [];

  constructor(private _openWeather: OpenWeatherService) {
    this.title = 'Google Maps / Open Weather';
    this.defaultCenter = { lat: 28.53834, lng: -81.37924 };
    this.center = Object.assign({}, this.defaultCenter);
    this.nombresCiudades = ["New York", "Orlando", "Miami", "Bogota"];
    this.listaCiudades = [];    
  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){

    /*
    this.listaCiudades = [
      {
        title: 'New York, NY',
        label: { color: 'red', text: 'New York, NY' },
        position: { lat: 40.71427, lng: -74.00597 }        
      }
    ];
    */

    console.log(">>> ================================");
    for (let city of this.nombresCiudades){
      
      this._openWeather.getData(city).subscribe((data: any) => {
        //this.listaCiudades.push(data); 
        //console.log(data);
        //const { coord, name } = data;
        //let point:MapPoint = { 'title': name, 'label': { 'color': 'red', 'text': 'This is text' }, 'position': coord };
        //console.log(point);
        //this.listaCiudades.push(point)
       
        
        const { coord, name, weather } = data;
        let point:MapPoint = {
          'title': name,
          'label': { 'color': 'blue', 'text': name },
          'position': { lat: coord.lat, lng: coord.lon },
          'weather': weather        
        };
        this.listaCiudades.push(point);
                
      })    

      /*
      this._openWeather.getData(city).subscribe(respuesta => {
        console.log(respuesta);
        this.listaCiudades.push(respuesta);      
      }, error => {
        console.log("ERRORxxxx: ", error);
      });
      */
    }

  }

  showMessage() {
    alert('Este es un mensaje de prueba');
  }
}
