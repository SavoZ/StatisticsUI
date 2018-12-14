import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { IndexComponent } from './index/index.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatisticsIndexComponent } from './index/statistics/statistics-index/statistics-index.component';
import { TeamsComponent } from './index/statistics/teams/teams.component';
import { DoubleChanceComponent } from './index/statistics/double-chance/double-chance.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      { path: 'index', component: IndexComponent },
      {
        path: 'statistics', children: [
          { path: 'index', component: StatisticsIndexComponent },
          { path: 'teams', component: TeamsComponent },
          { path: 'double-chance', component: DoubleChanceComponent },

        ]
      },
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StatisticsIndexComponent,
    TeamsComponent,
    DoubleChanceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AgGridModule.withComponents([]),

    ReactiveFormsModule,
    FormsModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
