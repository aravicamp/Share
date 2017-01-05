import { Component, Input, OnInit } from '@angular/core';
import { Response } from '../model/response';
import { GridConfig } from '../../assets/framework/grid/ejs.grid.config';
import { TreeGridService } from '../../assets/framework/grid/tree-grid.service';

@Component({
  selector: 'app-display',
  templateUrl: '../view/display.component.html',
  styles: ['pre {height: 90px; width: 140px; padding: 10px;}']
})
export class DisplayComponent implements OnInit {
  private display: Response = new Response();
  gridConfig: GridConfig = new GridConfig();

  private ejsGrid: TreeGrid;

  constructor(private treeGridService: TreeGridService) { 
    
  }

  ngOnInit() {
    //this.display.data = '[{}]';
    //this.display.data = '/assets/xml/data.xml';
    this.gridConfig.gridId = 'mygrid';
    this.gridConfig.gridLayoutUrl = '/assets/xml/ejsGrid.xml';
  }

  onGridRendered(grid: TreeGrid) {
    this.ejsGrid = grid;
  }

  @Input()
  public set displayResponse(searchResponse: Response) {
    this.display = searchResponse;
    if (this.ejsGrid !== undefined) {
      //this.ejsGrid.ClearBody();
      let value: any = this.treeGridService._prepareTableData(this.display.data);
      this.ejsGrid.Source.Data.Data =value;
      
      //this.ejsGrid.Source.Data.Url = '/assets/xml/data_req_json.json';
      this.ejsGrid.ReloadBody();

      //this.ejsGrid.AddDataFromServer(value);
    }
  }

  public get displayResponse() {
    return this.display;
  }
}
