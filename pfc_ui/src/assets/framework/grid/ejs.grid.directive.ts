import { Directive, Input, Output, OnInit, ElementRef } from '@angular/core';
import { TreeGridService } from './tree-grid.service';
import { GridConfig } from './ejs.grid.config';
import { TableLayoutService } from './table-layout.service';


declare var Grids: any;
declare var TDataIO: any;
declare var TreeGrid: any;

@Directive({
  selector: '[app-ejs-grid]'
})
export class EJSGridDirective implements OnInit {
  @Input() ejsGridConfig: GridConfig;
  @Input() ejsGridData: any;

  table: any;

  constructor(private el: ElementRef,
    private treeGridService: TreeGridService) {
  }
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
    this.table = this.treeGridService.create('sampleGrid', {
      data: this.ejsGridData,
      layout: this.ejsGridConfig.gridLayoutUrl.getData()
    });
  }
}

