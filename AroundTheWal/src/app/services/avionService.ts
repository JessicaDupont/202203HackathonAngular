import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Avion} from 'src/app/models/avions';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  
  url:string = "http://localhost:3000/listAvionsDepart" ;

  constructor(
    private _client:HttpClient
  ) { }

  getAllDepart():Observable<Avion[]>{
    return this._client.get<Avion[]>(this.url);
  }
  getAllArrivee():Observable<Avion[]>{
    return this._client.get<Avion[]>(this.url);
  }
}
