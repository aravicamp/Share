import { Injectable } from '@angular/core';
import * as _ from 'lodash';

interface IOptions {
  data: any;
  layout: any;
}

@Injectable()
export class TreeGridService {

  _prepareTableData(data: Object): TreeGridData {
    let returnData: TreeGridData = {
      Body: [data]
    };
    return returnData;
  }

  create(elementId: string, options: IOptions): TGrid {

    let table: TGrid = TreeGrid({
      Data: {
        Data: this._prepareTableData(_.cloneDeep(options.data))
      },
      Layout: {
        Url: _.cloneDeep(options.layout)
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
