import { Component, OnInit } from '@angular/core';
import { ICovidInfo } from 'src/app/models/i-covid-info';
import { CovidDataService } from 'src/app/services/covid-data-service/covid-data.service';
import { ResponseCovidInfo } from 'src/app/services/covid-data-service/responses/response-covid-info';

@Component({
  selector: 'app-covid-locations',
  templateUrl: './covid-locations.component.html',
  styleUrls: ['./covid-locations.component.scss']
})
export class CovidLocationsComponent implements OnInit {

  public globalCovid = [];
  //public covidInfos: ICovidInfo[] = [];

  constructor(private covidService: CovidDataService) { }

  ngOnInit(): void {


  }

  getData(){
    this.covidService.getCovidStats().subscribe({
      next: (resp: any) => {
        this.globalCovid = resp.summaryStats.global;
        console.log(this.globalCovid);
      },
      error: (e) => {console.error(e)},
      complete: () => {console.log("Data returned completed")}
    });
    
  }


}
