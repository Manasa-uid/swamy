
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor( private http:HttpClient) { }

  xyz(){
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }
}
