import { RealtimeapiProvider } from './../realtimeapi/realtimeapi';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductlistProvider {

  constructor(public feathers:RealtimeapiProvider,public http: HttpClient) {
    console.log('Hello ProductlistProvider Provider');
  }
  messages$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return this.feathers
      .service('productlist')
      .watch()
      .find();
  }
}
