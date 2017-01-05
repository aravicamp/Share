interface TreeGrid {
  (option: TreeGridOption, elementId: string): Table;
  Source: Source;
  ClearBody();
  AddDataFromServer(data:String);
  ReloadBody(callback:function);
}

interface Source{
  Data:Data;
}

interface Reload {
  (option: TreeGridOption, elementId: string): Table;
}

interface TreeGridOption {
  Data: Data;
  Layout: Layout;
  Upload: Upload;
}

interface Data {
  //Url: string;
  Data: TreeGridData;
}

interface TreeGridData {
  Body: Array<any>;
}

interface Layout {
  Url: string;
  //Data: TreeGridLayout;
}

interface TreeGridLayout {
  Cfg: any;
  Cols: Array<any>;
  Def: Array<any>;
  Header: any;
  Panel: any;
}

interface Upload {
  Format: String;
  Xml: Number;
  Type: String;

}

interface Table {
  Dispose();
  AutoUpdate: number;
  GetChanges(): string;
  Rows: any;
  RemoveRow(row: any): void;
  AcceptChanges(): void;
  GetGanttBase(): string;
}

declare var TreeGrid: TreeGrid;
declare var Reload: TreeGrid;
