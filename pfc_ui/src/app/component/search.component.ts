import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { Response } from '../model/response';
import { PFC } from '../model/pfc';
@Component({
  selector: 'app-search',
  templateUrl: '../view/search.component.html',
})
export class SearchComponent implements OnInit {
  errorMessage: string;
  @Input() label: string;
  @Input() initialValue: string = '0';

  @Output() searchEvent: EventEmitter<PFC[]> = new EventEmitter();
  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
  }

  private searchPFC(airportCode: string): void {

    this.searchService.retriveData(airportCode).subscribe(
      data => this.handleResult(data),
      error => this.errorMessage = <any>error);
  }

  private handleResult(mydata: PFC[]) {
    console.log('search comp - ' + mydata);
    this.searchEvent.emit(mydata);
  }
}
