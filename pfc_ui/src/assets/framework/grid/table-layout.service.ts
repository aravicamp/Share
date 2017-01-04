import { Injectable } from '@angular/core';

export interface TreeGridLayoutService {
   getData(): Object;
}

@Injectable()
export class TableLayoutService implements TreeGridLayoutService {

  private _tableLayoutData: any = {
    Cfg: {
      Code: 'GTACFEHEBNXADB',
      id: 'Test',
      Style: 'Query',
      ConstHeight: '1',
      ConstWidth: '1',
      SafeCSS: '1',
      AutoUpdate: '1',
      SuppressMessage: '2',
      FilterEmpty: '2',
      MaxHeight: '1',
      ResizingMain: '0',
      ExportType: 'Expanded,Outline',
      PrintCols: '2',
      ExportCols: '2',
      ExportPDFCols: '2',
      Editing: '1',
      ColMoving: '1',
      Dragging: '0',
      Selecting: '1',
      NoPager: '1',
      Paging: '2',
      AllPages: '0',
      PageLength: '50',
      SuppressCfg: '1',
      Sort: 'sequenceNumber,status',
      AutoSort: '1',
      SelectingCells: '0'
    },
    Panel: {
      CanHide: '0',
      Select: '1',
      Delete: '0'
    },
    Cols: [
      { Name: 'carrierCode', Width: 120 },
      { Name: 'status', Width: 150 },
      { Name: 'sequenceNumber' },
      { Name: 'effectiveDate', Width: '90', Type: 'Date', CanFilter: '2', CanSearch: '0', AutoCalendar: '1', Format: 'ddMMMyy' },
      { Name: 'discontinueDate', Width: '90', Type: 'Date', CanFilter: '2', CanSearch: '0', AutoCalendar: '1', Format: 'ddMMMyy' },
    ],
    Head: [
      {
        Spanned: '1',
        carrierCode: '', carrierCodeAlign: 'Center', SortIcons: '0',
        status: '', statusAlign: 'Center',
        sequenceNumber: '', sequenceNumberAlign: 'Center',
        effectiveDate: 'Travel', effectiveDateSpan: '2', effectiveDateAlign: 'Center'
      },
      {
        id: 'Header',
        carrierCode: 'Carrier',
        status: 'Status',
        sequenceNumber: 'Sequence',
        effectiveDate: 'EFF',
        discontinueDate: 'DISC'
      }
    ]
  };

  getData(): Object {
    return this._tableLayoutData;
  }
}
