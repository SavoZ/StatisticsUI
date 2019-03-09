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
    { headerName: 'Start', field: 'startTime', width: 90 },
    { headerName: 'Liga', field: 'leagueName', width: 120 },
    { headerName: 'Domaćin', field: 'homeName', width: 120 },
    { headerName: 'Avrg', field: 'homeAvrg', width: 70 },
    { headerName: 'H.G.', field: 'homeGoals', width: 70 },
    { headerName: '3+ %', field: 'homeThreePlus', width: 70 },
    { headerName: '3+ niz', field: 'homeThreePlusInRow', width: 80 },
    { headerName: 'Last 3', field: 'homeLastThreeArg', width: 80 },
    { headerName: 'Gost', field: 'awayName', width: 120 },
    { headerName: 'Avrg', field: 'awayAvrg', width: 70 },
    { headerName: 'A.G.', field: 'awayGoals', width: 70 },
    { headerName: '3+', field: 'awayThreePlus', width: 70 },
    { headerName: '3+ niz', field: 'awayThreePlusInRow', width: 80 },
    { headerName: 'Last 3', field: 'awayLastThreeArg', width: 80 },
    { headerName: 'Avrg', field: 'avrg', width: 90 },
    { headerName: 'Ukupno', field: 'total', width: 90 }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.matches = this.http.get(API_ENDPOINT + 'statistics/getstatistics');

  }

}
