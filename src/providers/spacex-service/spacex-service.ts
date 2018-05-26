import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SpacexServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SpacexServiceProvider Provider');
  }

}
