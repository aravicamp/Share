import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridConfig } from '../../../assets/framework/grid/ejs.grid.config';
import { TableLayoutService } from '../../../assets/framework/grid/table-layout.service';

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
    if (this.ejsGridConfig === undefined) {
      this.ejsGridConfig = new GridConfig();
      this.ejsGridConfig.gridId = 'myGrid';
      this.ejsGridConfig.gridLayoutUrl = new TableLayoutService();
    }

    if (this.ejsGridData === undefined) {
      this.ejsGridData = [{}];
    }
    console.log(this.ejsGridConfig.gridId);
    console.log(this.ejsGridData);
    this.initTable();
  }

  private initTable() {
    let table: TreeGrid = this.treeGridService.create('sampleGrid', {
      data: this.ejsGridData,
      layout: this.ejsGridConfig.gridLayoutUrl.getData()
    });
    this.gridEmit.emit(table);
  }

}
