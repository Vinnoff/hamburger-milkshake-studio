import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch } from '../../models/launchs/Launch';

/*
  Generated class for the SpaceXApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpaceXApiProvider {

  private baseUrl = "https://api.spacexdata.com/v2"
  private endPointSpaceXCompanyInfo = "/info"
  private endPointLaunches = "/launches/all"

  constructor(public http: HttpClient) {
    console.log('Hello SpacexServiceProvider Provider');
  }
  
  getAllLauches() : Observable<Launch[]>{
    return this.http.get<Launch[]>(this.baseUrl + this.endPointLaunches)
  }

}
