import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as _ from 'lodash';


import { Constants } from '../util/constants';

let defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
let defaultRequestOptions = new RequestOptions({ headers: defaultHeaders });

@Injectable()
export class ServiceConstructor {
  API_URL: string;

  constructor(url: string, protected http: Http) {
    this.API_URL = Constants.API_URL + url;
  }

  /**
   * Loads all entities
   *
   * @return {Promise}
   */
  query(): Observable<any> {
    return this.http.get(this.API_URL)
      .map(this._extractData.bind(this))
      .catch(this._handleError.bind(this));
  }

  /**
   * Loads entity by id
   *
   * @param id {string}
   *
   * @return {Promise}
   */
  get(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`)
      .map(this._extractData.bind(this))
      .catch(this._handleError.bind(this));
  }

  /**
   * Save entity
   *
   * @param data {object}
   *
   * @return {Promise}
   */
  save(data: any): Observable<any> {
    return this.http.post(this.API_URL, this.transformRequest(data), defaultRequestOptions)
      .map(this._extractData.bind(this))
      .catch(this._handleError.bind(this));
  }

  /**
   * Patches entity. The difference between update and patch
   * is that update replaces whole record with given one,
   * and patch replaces just given values
   *
   * @param data {object}
   *
   * @return {Promise}
   */
  patch(data: any): Observable<any> {
    return this.http.patch(`${this.API_URL}/${data.id}`, this.transformRequest(data), defaultRequestOptions)
      .map(this._extractData.bind(this))
      .catch(this._handleError.bind(this));
  }

  /**
   * Deletes entity by id
   *
   * @param id
   *
   * @return {Promise}
   */
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`)
      .map(this._extractData.bind(this))
      .catch(this._handleError.bind(this));
  }

  /**
   * Resets entities collection
   *
   * @return {Promise}
   */
  reset(): Observable<any> {
    return this.http.get(this.API_URL + '/reset')
      .map(this._extractData.bind(this))
      .catch(this._handleError.bind(this));
  }

  /**
   * Just transforms mongodb `_id` to `id`, which TreeGrid table expects
   *
   * @param data {object} Project
   *
   * @return     {object}
   */
  private _transformResponse(data: any): any {
    let newData: any = _.assign({}, data, { id: data._id });
    delete newData._id;
    return newData;
  }

  /**
   * Transforms `id` to mongodb style `_id`
   *
   * @param data {object} Project
   *
   * @return     {object}
   */
  public transformRequest(data: any): any {
    let newData: any = _.assign({}, data, { _id: data.id });
    delete newData.id;
    return JSON.stringify(newData);
  }

  private _extractData(res: Response) {
    if (!res.text()) {
      return {}
    }

    let body = res.json();

    if (body instanceof Array) {
      body = _.map(body, this._transformResponse);
    } else {
      body = this._transformResponse(body);
    }

    return body || {};
  }

  private _handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
