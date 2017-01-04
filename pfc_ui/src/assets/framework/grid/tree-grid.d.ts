interface TreeGrid {
  (option: TreeGridOption, elementId: string): Table;
  ClearBody()
  Reload(option: TreeGridOption, elementId: string, confirm: boolean): Table;
}

interface TreeGridOption {
  Data: Data;
  Layout: Layout;
  Upload: Upload;
}

interface Data {
  Data: TreeGridData;
}

interface TreeGridData {
  Body: Array<any>;
}

interface Layout {
  Data: TreeGridLayout;
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
