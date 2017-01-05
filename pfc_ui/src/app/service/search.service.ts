import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PFC } from '../model/pfc';
import { ServiceConstructor } from './service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class SearchService extends ServiceConstructor {
  constructor(protected http: Http) {
    super('/pfc', http);
  }

  retriveData(airport: string): Observable<PFC[]> {
    console.log('airport - ' + airport);
    return this.get(airport)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log('search response - ' + res);
    return <PFC[]>res['data'] || {};
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
