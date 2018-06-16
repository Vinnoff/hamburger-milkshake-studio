import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch } from '../../models/launchs/Launch';
import { Rocket } from '../../models/rockets/Rocket';
import { CompanyInfo } from '../../models/company/CompanyInfo';

/*
  Generated class for the SpaceXApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpaceXApiProvider {
  private baseUrl = "https://api.spacexdata.com/v2"

  constructor(public http: HttpClient) {
    console.log('Hello SpacexServiceProvider Provider');
  }
  
  getAllLaunches() : Observable<Launch[]>{
    return this.http.get<Launch[]>(this.baseUrl + "/launches/all")
  }

  getNextLaunches() : Observable<Launch[]>{
    return this.http.get<Launch[]>(this.baseUrl + "/launches/upcoming")
  }

  getAllRockets() : Observable<Rocket[]>{
    return this.http.get<Rocket[]>(this.baseUrl + "/rockets")
  }

  getSpaceXInfo() : Observable<CompanyInfo>{
    return this.http.get<CompanyInfo>(this.baseUrl + "/info")
  }
}
