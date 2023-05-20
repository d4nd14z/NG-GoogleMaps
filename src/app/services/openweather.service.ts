import { Injectable } from '@angular/core';
import { MapPoint } from '../pages/home/mappoint';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private _http:HttpClient) {}

  public getData(city:string):Observable<any> {
    let urlAPI:string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2384522059137be479f6875db71bda53`;
    return this._http.get<any>(urlAPI);
  }


}
