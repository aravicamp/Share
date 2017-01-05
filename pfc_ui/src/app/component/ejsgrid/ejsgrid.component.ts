import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridConfig } from '../../../assets/framework/grid/ejs.grid.config';
import { TreeGridService } from '../../../assets/framework/grid/tree-grid.service';

@Component({
  selector: 'app-ejsgrid',
  templateUrl: './ejsgrid.component.html'
})
export class EjsgridComponent implements OnInit {
  @Input() ejsGridConfig: GridConfig;
  @Input() ejsGridData: any;

  @Output() gridEmit: EventEmitter<TreeGrid> = new EventEmitter();
  constructor(private treeGridService: TreeGridService) { }

  ngOnInit() {
    this.buildGrid();
  }

  private buildGrid() {
    //this.ejsGridData = '/assets/xml/data.xml';
    let table: TreeGrid = this.treeGridService.create('sampleGrid', {
      data: this.ejsGridData,
      //layout: this.ejsGridConfig.gridLayoutUrl.getData()
      layout: this.ejsGridConfig.gridLayoutUrl
    });
    this.gridEmit.emit(table);
  }

}
