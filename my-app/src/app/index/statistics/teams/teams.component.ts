import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from 'src/app/_constants/url.constants';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;
  teams;
  columnDefs = [
    {
      headerName: 'Tim', field: 'teamName', width: 200},
    { headerName: 'Mečeva', field: 'totalGames', width: 100 },
    { headerName: '0-2 %', field: 'zeroToTwoPercentage', width: 80 },
    { headerName: '3+ %', field: 'threePlusPercentage', width: 80 },
    { headerName: '2-3 %', field: 'twoToThreeGoalsPercentage', width: 80 },
    { headerName: '2-4 %', field: 'twoToFourGoalsPercentage', width: 80 },
    { headerName: '1-3 %', field: 'oneToThreeGoalsPercentage', width: 80 },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.teams = this.http.get(API_ENDPOINT + 'statistics/GetGoalsStatistics');

  }

}
