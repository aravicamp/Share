import { Component } from '@angular/core';
import { PFC } from '../model/pfc';
import { Response } from '../model/response';

@Component({
    selector: 'app-root',
    templateUrl: '../view/app.component.html',
})
export class AppComponent {
  title: string = 'PFC Demo';
  response: Response = new Response();

  onSearchEvent(value: PFC[]) {
    this.response = new Response();
    this.response.data = JSON.stringify(value);
    console.log('parent component - ' + this.response.data);
  }
}
