import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from 'src/app/_constants/url.constants';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;
  matches;
  columnDefs = [
    { headerName: 'Start', field: 'startTime', width: 90 },
    { headerName: 'Liga', field: 'leagueName', width: 120 },
    { headerName: 'Domaćin', field: 'homeName', width: 120 },
    { headerName: 'Avrg', field: 'homeAvrg', width: 70 },
    { headerName: '3+ %', field: 'homeThreePlus', width: 70 },
    { headerName: '3+ niz', field: 'homeThreePlusInRow', width: 80 },
    { headerName: 'Gost', field: 'awayName', width: 120 },
    { headerName: 'Avrg', field: 'awayAvrg', width: 70 },
    { headerName: '3+', field: 'awayThreePlus', width: 70 },
    { headerName: '3+ niz', field: 'awayThreePlusInRow', width: 80 },
    { headerName: 'Avrg', field: 'avrg', width: 90 },
    { headerName: 'Ukupno', field: 'total', width: 90 },
    {
      headerName: 'Goals', field: 'goals', width: 90, cellStyle: function (params) {
        console.log(params);
        if (params.data.isGood) {
          return { color: 'white', backgroundColor: 'green' };
        } else {
          return { color: 'white', backgroundColor: 'red' };
        }
      }
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.matches = this.http.get(API_ENDPOINT + 'statistics/GetLastRoundStatistics');

  }

}
