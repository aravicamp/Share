import { Component, Input, OnInit } from '@angular/core';
import { Response } from '../model/response';
import { GridConfig } from '../../assets/framework/grid/ejs.grid.config';
import { TableLayoutService } from '../../assets/framework/grid/table-layout.service';

@Component({
  selector: 'app-display',
  templateUrl: '../view/display.component.html',
  styles: ['pre {height: 90px; width: 140px; padding: 10px;}']
})
export class DisplayComponent implements OnInit {
  private display: Response;
  gridConfig: GridConfig = new GridConfig();

  private ejsGrid: TreeGrid;

  ngOnInit() {
    this.gridConfig.gridId = 'mygrid';
    this.gridConfig.gridLayoutUrl = new TableLayoutService();
    //    this.gridConfig.gridLayoutUrl = '../../assets/xml/ejsGrid.xml';
  }

  onGridRendered(grid: TreeGrid) {
    this.ejsGrid = grid;
  }

  @Input()
  public set displayResponse(displayResponse: Response) {
    this.display = displayResponse;
    if(this.ejsGrid !== undefined){
      
    }
  }

  public get displayResponse() {
    return this.display;
  }
}
