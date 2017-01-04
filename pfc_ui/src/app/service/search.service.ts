import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PFC } from '../model/pfc';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class SearchService {
  private url = 'http://localhost:8080/pfc/';
  private http: Http;
  constructor(http: Http) { this.http = http; }

  retriveData(airport: string): Observable<PFC[]> {
    console.log('airport - ' + airport);
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get(this.url + airport, new RequestOptions({ headers: headers }))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('search response - ' + body);
    return <PFC[]>body.data || {};
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
