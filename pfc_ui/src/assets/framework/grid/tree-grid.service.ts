import { Injectable } from '@angular/core';
import * as _ from 'lodash';

interface IOptions {
  data: any[];
  layout: any;
}

@Injectable()
export class TreeGridService {

  private _prepareTableData(data: any): any {
    let returnData: any = null;
    returnData = {
      Body: [data]
    };
    return returnData;

  }

  create(elementId: string, options: IOptions): any {

    let table = TreeGrid({
      Data: {
        Data: this._prepareTableData(_.cloneDeep(options.data))
      },
      Layout: {
        Data: _.cloneDeep(options.layout)
      },
      Upload: {
        Format: 'JSON',
        Xml: 2,
        Type: 'body'
      },
    }, elementId);

    return table;
  }
  
}
