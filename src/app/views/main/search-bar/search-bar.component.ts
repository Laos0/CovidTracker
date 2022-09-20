import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICovidInfo } from 'src/app/models/i-covid-info';
import { CovidDataService } from 'src/app/services/covid-data-service/covid-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public userInput: string; // this is what the user typed: FormGroup/FormControl -> use subscribe
  public searchResult: ICovidInfo[];
  public covidData: ICovidInfo[];

  constructor(private covidService: CovidDataService) { }

  ngOnInit(): void {
    this.covidService.covidData = this.covidData;
  }

  // This method will keep being fired whenever user changes its value
  getSelectedCovidData(event: any){

    if(event.target.value === ''){
      return this.searchResult = [];
    }

    // will need to do filter filter filter three times
    this.searchResult = this.covidService.covidData.filter((data) => {
      return data.Province_State
        .toLowerCase()
        .startsWith(event.target.value.toLowerCase());
    });
    
    console.log(this.searchResult);

    return null;
  }

  public getValue(val: string){
    console.log(val);
  }

}
