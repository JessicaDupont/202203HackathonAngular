import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { attraction } from '../models/Attraction';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {

  
  url:string = "http://localhost:21082/liste" ;

  optionRequest = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Header': 'Content-Type'
    })
  };

  constructor(
    private _client:HttpClient
  ) { }

  getAll():Observable<attraction[]>{
    return this._client.get<attraction[]>(this.url, this.optionRequest);
  }
  getOne():Observable<attraction[]>{
    return this._client.get<attraction[]>(this.url);
  }
}