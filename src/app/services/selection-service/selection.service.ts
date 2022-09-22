import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICovidInfo } from 'src/app/models/i-covid-info';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  // when subject publishes, all listeners on the observable will react to 
  private _onSearchBarSelect: Subject<ICovidInfo> = new Subject<ICovidInfo>();
  public onSearchBarSelect$: Observable<ICovidInfo> = this._onSearchBarSelect.asObservable();

  constructor() { }

  public onSearchBarSelect(data: ICovidInfo): void{

    // publish the data, whoever listens(subscribe) will receive the data
    this._onSearchBarSelect.next(data);

    
  }
}
