import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../../../_constants/url.constants';

@Component({
  selector: 'app-statistics-index',
  templateUrl: './statistics-index.component.html',
  styleUrls: ['./statistics-index.component.css']
})
export class StatisticsIndexComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  matches;
  columnDefs = [
    { headerName: 'Home', field: 'homeName' },
    { headerName: 'HomeAvrg', field: 'homeAvrg' },
    { headerName: '3+ %', field: 'homeThreePlus' },
    { headerName: 'Away', field: 'awayName' },
    { headerName: 'AwayAvrg', field: 'awayAvrg' },
    { headerName: '3+', field: 'awayThreePlus' },
    { headerName: 'Total', field: 'total' },
  ];

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.matches = this.http.get(API_ENDPOINT + 'statistics/getstatistics');

  }

}
