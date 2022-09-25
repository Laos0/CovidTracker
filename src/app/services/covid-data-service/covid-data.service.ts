import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseCovidInfo } from './responses/response-covid-info';
import { ICovidGlobal } from 'src/app/models/i-covid-global';
import { ICovidInfo } from 'src/app/models/i-covid-info';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  // Turn this into Enum if have time
  // Covid data api source
  private baseUrl: string = "https://coronavirus.m.pipedream.net/";

  // make private, then need setter and getter
  public covidData: ICovidInfo[];


  constructor(private http: HttpClient) { }

  getCovidStats(): Observable<ICovidGlobal[]>{

    
    const oldDate = localStorage.getItem('sessionTimer');

    if(oldDate){
      
      const oldDateToNum = parseInt(oldDate);
      const d1: Date = new Date(oldDateToNum);
      
      const d2: Date = new Date();
      
      const d1sec = Math.floor(d1.getTime() / 1000);
      const d2sec = Math.floor(d2.getTime() / 1000);
      
      const seconds = d2sec - d1sec;
      
      if(seconds >= 10){
        console.log("Clearing Storage");
        localStorage.clear();
      }else{
        console.log("Storage not clearning");
      }
    }
    
    // retrieving the covid data from api call from localStorage
    const cacheData = localStorage.getItem("covidData");

    if(cacheData){

      return of(JSON.parse(cacheData));
    }else{

      
      return this.http
      .get<ICovidGlobal[]>(this.baseUrl)
      .pipe(map((d) => {

        localStorage.setItem("covidData", JSON.stringify(d));
        const date: number = Date.now();
        localStorage.setItem('sessionTimer', date.toString());


        return d;
        }));
    }

  }

  public get(url: string, options?: any) { 
  return this.http.get(url, options); 
  } 

  public post(url: string, data: any, options?: any) { 
  return this.http.post(url, data, options); 
  } 

  public put(url: string, data: any, options?: any) { 
  return this.http.put(url, data, options); 
  } 

  public delete(url: string, options?: any) { 
  return this.http.delete(url, options); 
  }

}
