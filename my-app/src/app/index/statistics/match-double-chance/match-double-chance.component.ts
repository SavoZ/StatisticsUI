import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { API_ENDPOINT } from 'src/app/_constants/url.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-match-double-chance',
  templateUrl: './match-double-chance.component.html',
  styleUrls: ['./match-double-chance.component.css']
})
export class MatchDoubleChanceComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;
  matches;
  columnDefs = [
    { headerName: 'Početak', field: 'startTime', width: 120 },
    { headerName: 'Liga', field: 'leagueName', width: 140 },
    { headerName: 'Domaćin', field: 'homeName', width: 130 },
    { headerName: '1&2-3', field: 'homeZeroTwoToThreeGoals', width: 90 },
    { headerName: '1&2-4', field: 'homeZeroTwoToFourGoals', width: 90 },
    { headerName: '1&GG', field: 'homeAndGGPercentage', width: 90 },
    { headerName: 'GG&3+', field: 'homeGGThreePlusPercentage', width: 90 },
    { headerName: 'Gost', field: 'awayName', width: 130 },
    { headerName: '2&2-3', field: 'awayZeroTwoToThreeGoals', width: 90 },
    { headerName: '2&2-4', field: 'awayZeroTwoToFourGoals', width: 90 },
    { headerName: '2&GG', field: 'awayAndGGPercentage', width: 90 },
    { headerName: 'GG&3+', field: 'awayGGThreePlusPercentage', width: 90 },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.matches = this.http.get(API_ENDPOINT + 'statistics/GetDoubleChanceMatchStatistics');
  }

}
