import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DynamicdataService {

  constructor(private http1:HttpClient) { }
  fun(){
    return this.http1.get("https://restcountries.eu/rest/v2/all")
}
}