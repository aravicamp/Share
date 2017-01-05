import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { ServiceConstructor } from './service';

@Injectable()
export class SaveService extends ServiceConstructor {

  constructor(protected http: Http) {
    super('/pfc', http);
  }

}
