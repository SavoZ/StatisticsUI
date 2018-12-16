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
    { headerName: 'Početak', field: 'startTime', width: 150 },
    { headerName: 'Liga', field: 'leagueName', width: 150 },
    { headerName: 'Domaćin', field: 'homeName', width: 140 },
    { headerName: 'Prosečno', field: 'homeAvrg', width: 100 },
    { headerName: '3+ %', field: 'homeThreePlus', width: 100 },
    { headerName: '3+ niz', field: 'homeThreePlusInRow', width: 100 },
    { headerName: 'Gost', field: 'awayName', width: 140 },
    { headerName: 'Prosečno', field: 'awayAvrg', width: 100 },
    { headerName: '3+', field: 'awayThreePlus', width: 100 },
    { headerName: '3+ niz', field: 'awayThreePlusInRow', width: 100 },
    { headerName: 'Ukupno', field: 'total', width: 100 },
  ];

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.matches = this.http.get(API_ENDPOINT + 'statistics/getstatistics');

  }

}
