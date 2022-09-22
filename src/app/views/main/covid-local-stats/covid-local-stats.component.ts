import { Component, OnInit } from '@angular/core';
import { ICovidInfo } from 'src/app/models/i-covid-info';
import { CovidDataService } from 'src/app/services/covid-data-service/covid-data.service';
import { SelectionService } from 'src/app/services/selection-service/selection.service';
import { UserLocationService } from 'src/app/services/user-location-service/user-location.service';

@Component({
  selector: 'app-covid-local-stats',
  templateUrl: './covid-local-stats.component.html',
  styleUrls: ['./covid-local-stats.component.scss']
})
export class CovidLocalStatsComponent implements OnInit {

  public state: string;
  public county: string;
  public region: string;
  public localConfirmed: string;
  public localDeaths: string;
  public lastUpdated: string;

  constructor(private covidService: CovidDataService, 
              private userLocationService: UserLocationService, 
              private selectionService: SelectionService) { }

  ngOnInit(): void {
    

    // get latitude and longitude from user 
    this.getCurrentLocation();

    // fetching all covid data
    this.getLocalStats();

    this.selectionService.onSearchBarSelect$.subscribe((data: ICovidInfo) =>{
      this.state = data.Province_State;
      this.county = data.Admin2;
      this.region = data.Country_Region;
      this.localConfirmed = data.Confirmed;
      this.localDeaths = data.Deaths;
      this.lastUpdated = data.Last_Update;
    });
  }

  getLocalStats(){
    this.covidService.getCovidStats().subscribe({
      next: (resp: any) => {
        //console.log(resp.rawData);

        // a filter that searches for covid data based on State
        const localCovidData = resp.rawData.filter(obj => {
         
          return obj.Province_State === this.state;
        });

        // After filtering, we filter the county within the state to get the revelant covid data
        const LCD = localCovidData.filter(obj => {
          return obj.Admin2 === this.county;
        });

        this.localConfirmed = LCD[0].Confirmed;
        this.localDeaths = LCD[0].Deaths;
        this.lastUpdated = LCD[0].Last_Update;
        this.region = LCD[0].Country_Region;

        
        // console.log(localCovidData[0]);
      },
      error: (e) => {console.error(e)},
      complete: () => {console.log("Data returned completed")}
    });
  }

  // get user's coordinates
  getCurrentLocation(){
    this.userLocationService.getPosition().then(resp=>
    {
      //console.log(`Positon: ${resp.lng} ${resp.lat}`);
      //console.log(resp)
      this.getGeolocationData(resp.lat, resp.lng);
    });
  }

  // this method will call the service to retrieve the county of the user based on its latitude and longitude
  // using TomTom's api 
  getGeolocationData(lat: number, lng: number){
    this.userLocationService.getGeolocationData(lat, lng).subscribe((resp:any)=>{

      this.state = resp.addresses[0].address.countrySubdivisionName;
      this.county = resp.addresses[0].address.countrySecondarySubdivision;

    });;
  }

}
