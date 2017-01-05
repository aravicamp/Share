import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/root/app.component';
import { SearchComponent } from './component/search/search.component';
import { DisplayComponent } from './component/display/display.component';

import { SearchService } from './service/search.service';
import { SaveService } from './service/save.service';

import { TreeGridService } from '../assets/framework/grid/tree-grid.service';
import { EjsGridComponent } from '../assets/framework/grid/ejsgrid.component';

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
        EjsGridComponent
    ],
    providers: [
      SearchService,
      TreeGridService,
      SaveService,
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }
