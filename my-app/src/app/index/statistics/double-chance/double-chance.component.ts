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
    {
      headerName: 'Tim', field: 'teamName', width: 200},
    { headerName: 'Mečeva', field: 'totalGames', width: 100 },
    { headerName: '1&2-3 %', field: 'zeroTwoToThreeGoals', width: 120 },
    { headerName: '1&2-4 %', field: 'zeroTwoToFourGoals', width: 120 },
    { headerName: '1&2-5 %', field: 'zeroTwoToFive', width: 120 },
    { headerName: '1&3-5 %', field: 'zeroThreeToFive', width: 120 },
    { headerName: 'GG&3+ %', field: 'ggThreePlusPercentage', width: 120 },
    { headerName: 'GGor3+ %', field: 'gGorThreePlusPercentage', width: 120 },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.teams = this.http.get(API_ENDPOINT + 'statistics/GetDoubleChanceStatistics');
  }

}
