import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

    private map;

  constructor(
    private _client:HttpClient
  ) { }


  public initMap(map : HTMLElement) {
      
    
      this.map = L.map(map,{
        center: [50.4693, 4.4702],
        zoom: 8
      });
  
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
  
      tiles.addTo(this.map);

    return map    
  }


}
