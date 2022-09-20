import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/services/covid-data-service/covid-data.service';

@Component({
  selector: 'app-covid-global-stats',
  templateUrl: './covid-global-stats.component.html',
  styleUrls: ['./covid-global-stats.component.scss']
})
export class CovidGlobalStatsComponent implements OnInit {

  public globalConfirmed: number;
  public globalDeaths: number;
  public lastUpdatedGlobal: string; // theres one for global and one for each country

  constructor(private covidService: CovidDataService) { }

  ngOnInit(): void {

    this.getData();
  }

  // this method will fetch us all the global stats on covid19
  // under the key global: confirmed, recovered, deaths
  getData(){

    // get request for all covid stats
    this.covidService.getCovidStats().subscribe({
      next: (resp: any) => {
        
        this.covidService.covidData = resp.rawData;
        // getting the global stats from object literal
        this.globalConfirmed = resp.summaryStats.global.confirmed;
        this.globalDeaths = resp.summaryStats.global.deaths;
        this.lastUpdatedGlobal = resp.cache.lastUpdated;
       // console.log(this.covidService.covidData);
      },
      error: (e) => {console.error(e)},
      complete: () => {console.log("Data returned completed from CovoidGlobalStats.component.ts")}
    });

  }

}
