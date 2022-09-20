import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseCovidInfo } from './responses/response-covid-info';
import { ICovidGlobal } from 'src/app/models/i-covid-global';
import { ICovidInfo } from 'src/app/models/i-covid-info';


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
    
    return this.http.get<ICovidGlobal[]>(this.baseUrl);
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
