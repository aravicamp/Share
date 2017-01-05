import { Component, Input, OnInit } from '@angular/core';
import { Response } from '../../model/response';
import { GridConfig } from '../../../assets/framework/grid/ejs.grid.config';
import { TreeGridService } from '../../../assets/framework/grid/tree-grid.service';
import { SaveService } from '../../service/save.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: ['pre {height: 90px; width: 140px; padding: 10px;}']
})
export class DisplayComponent implements OnInit {
  private display: Response = new Response();
  gridConfig: GridConfig = new GridConfig();

  private ejsGrid: TGrid;

  constructor(private saveService: SaveService, private treeGridService: TreeGridService) {

  }

  ngOnInit() {
    this.display.data = [{ 'carrierCode': '', 'status': '', 'sequenceNumber': '', 'effectiveDate': '', 'discontinueDate': '' }];
    this.gridConfig.gridId = 'myGrid';
    this.gridConfig.gridLayoutUrl = '/assets/xml/ejsGrid.xml';
  }

  onGridRendered(grid: TGrid) {
    this.ejsGrid = grid;
  }

  private saveGrid(): void {
    let changes = JSON.parse(this.ejsGrid.GetChanges()).Changes;
    let splitted = this.splitChangesIntoGroups(changes);
    let removes = splitted.removes;
    let updates = splitted.updates;
    let promises = this.uploadChanges.call(this, updates, removes);

    // if no changes, return
    if (!promises.length) {
      return;
    }

    Observable.forkJoin(promises)
      .subscribe(() => {
        this.finishSave(removes);
      });
  }
  @Input()
  public set displayResponse(searchResponse: Response) {
    this.display = searchResponse;
    if (this.ejsGrid !== undefined) {
      this.ejsGrid.ClearBody();
      this.ejsGrid.Source.Data.Data =
        this.treeGridService._prepareTableData(
          JSON.parse(this.display.data));
      this.ejsGrid.ReloadBody(null);
    }
  }

  public get displayResponse() {
    return this.display;
  }

  private splitChangesIntoGroups(changes: any) {
    let updates = [], removes = [];

    _.forEach(changes, function(change: any) {
      if (change.Deleted) {
        removes.push(change.id);
        return;
      }

      let update: any = _.assign({}, change);
      delete update.Changed;
      updates.push(update);
    });

    return {
      updates: updates,
      removes: removes
    };
  }

  private finishSave(removes) {
    _.forEach(removes, (id) => {
      let row = this.ejsGrid.Rows[id];
      this.ejsGrid.RemoveRow(row);
    });
    this.ejsGrid.AcceptChanges();
  }

  private uploadChanges(updates: any, removes: any) {
    let promises = [];
    let self = this;
    _.forEach(removes, function(id) {
      promises.push(self.saveService.delete(id));
    });

    _.forEach(updates, function(update) {
      promises.push(self.saveService.patch(update));
    });

    return promises;
  }

}
