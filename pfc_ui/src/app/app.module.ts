import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/app.component';
import { SearchComponent } from './component/search.component';
import { DisplayComponent } from './component/display.component';

import { SearchService } from './service/search.service';

import { EJSGridDirective } from '../assets/framework/grid/ejs.grid.directive';
import { TreeGridService } from '../assets/framework/grid/tree-grid.service';
import { EjsgridComponent } from './component/ejsgrid/ejsgrid.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        SearchComponent,
        DisplayComponent,
        EJSGridDirective,
        EjsgridComponent
    ],
    providers: [
      SearchService,
      TreeGridService,
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }
