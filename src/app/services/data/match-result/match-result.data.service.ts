import { Injectable } from '@angular/core';
import {MatchResultItem} from '../../../models/match-result/MatchResultInformation';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchResultDataService {

  private _matchResultList = new BehaviorSubject<MatchResultItem[]>(null);
  matchResultList = this._matchResultList.asObservable();

  constructor() { }

  setMatchResultItems(data: MatchResultItem[]) {
    this._matchResultList.next(data);
  }
}
