import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
/* import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'; */
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class RestHttpService {

  public allCountries;
  public currentCountry;

  public baseUrl = 'https://restcountries.eu/rest/v2'

  public getAllCountries():any{
    let myResponse = this._http.get(this.baseUrl + '/all')
    console.log(myResponse)
    return myResponse;
  }

  public getCountries(regionName): any {
    let myResponse = this._http.get(this.baseUrl + '/region/' + regionName)
    console.log(myResponse)
    return myResponse;
  }

  public getSingleCountry(countryName): any {
    let myResponse = this._http.get(this.baseUrl + '/name/' + countryName)
    console.log(myResponse)
    return myResponse;
  }  

  constructor(private _http:HttpClient) { }

}
