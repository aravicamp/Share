import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridConfig } from './ejs.grid.config';
import { TreeGridService } from './tree-grid.service';

@Component({
  selector: 'app-ejsgrid',
  templateUrl: './ejsgrid.component.html'
})
export class EjsGridComponent implements OnInit {
  @Input() ejsGridConfig: GridConfig;
  @Input() ejsGridData: any;

  @Output() gridEmit: EventEmitter<TGrid> = new EventEmitter();
  constructor(private treeGridService: TreeGridService) { }

  ngOnInit() {
    this.buildGrid();
  }

  private buildGrid() {
    let table: TGrid = this.treeGridService.create(this.ejsGridConfig.gridId, {
      data: this.ejsGridData,
      layout: this.ejsGridConfig.gridLayoutUrl
    });
    this.gridEmit.emit(table);
  }

}
