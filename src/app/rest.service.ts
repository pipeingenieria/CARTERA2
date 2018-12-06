import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

  public allCountries;
  public currentCountry;

  public getAllCountries():any{
    return this.allCountries;
  }

  public getCountries(currentCountryName): any {
    for(let country of this.allCountries){
      if(country.name == currentCountryName){
        this.currentCountry = country;
      }
    }
    return this.currentCountry;
  }

  constructor() { }

}
