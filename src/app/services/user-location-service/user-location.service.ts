import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CovidDataService } from '../covid-data-service/covid-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserLocationService {


  lat: number = 37.553;
  lng: number = -122.453;

  // use this to get the county based on lattitude and longititude 
  // api_key is from TomTom: https://developer.tomtom.com/user/me/apps
  api_key: string = "3JNYCpyxBcFRnHiBp15KifGS005qLlim"
  url: string = "https://api.tomtom.com/search/2/reverseGeocode/" + this.lat + "," + this.lng + ".json?key=" + this.api_key;
  
  constructor(private covidService: CovidDataService, private http: HttpClient) { }

  // gets me the user's lattitude and longitude using promise instead of observable
  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          //reject(err);

          // If user's location is turned off then 
          console.log("LOCATION SERVICE TURNED OFF: TURN ON TO SEE LAT AND LNG");
          //console.log("Location Service is Turned off");
        });
    });

  }

  getGeolocationData(lat: number, lng: number){
    
    this.updateUrl(lat, lng);
    return this.http.get(this.url);
  }

  updateUrl(lat: number, lng: number){
    this.url = "https://api.tomtom.com/search/2/reverseGeocode/" + lat + "," + lng + ".json?key=" + this.api_key;
  }
}
