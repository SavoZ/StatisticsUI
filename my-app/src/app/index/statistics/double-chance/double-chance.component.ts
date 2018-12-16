import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from 'src/app/_constants/url.constants';

@Component({
  selector: 'app-double-chance',
  templateUrl: './double-chance.component.html',
  styleUrls: ['./double-chance.component.css']
})
export class DoubleChanceComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;
  teams;
  columnDefs = [
    { headerName: 'Tim', field: 'teamName', width: 150},
    { headerName: 'Liga', field: 'leagueName', width: 150},
    { headerName: 'Mečeva', field: 'totalGames', width: 100 },
    { headerName: '1&2-3 %', field: 'zeroTwoToThreeGoals', width: 110 },
    { headerName: '1&2-4 %', field: 'zeroTwoToFourGoals', width: 110 },
    { headerName: '2&2-3 %', field: 'twoTwoToThreeGoals', width: 110 },
    { headerName: '2&2-4 %', field: 'twoTwoToFourGoals', width: 110 },
    { headerName: 'GG&3+ %', field: 'ggThreePlusPercentage', width: 110 },
    { headerName: 'GGor3+ %', field: 'gGorThreePlusPercentage', width: 110 },
    { headerName: '1X&2+ %', field: 'notTwoAndTwoGoals', width: 110 },
    { headerName: '1X&3+ %', field: 'notTwoAndThreeGoals', width: 110 },

  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.teams = this.http.get(API_ENDPOINT + 'statistics/GetDoubleChanceStatistics');
  }

}
