import { Injectable } from '@angular/core';
import {MatchResultInformation, MatchResultItem} from '../../../models/match-result/MatchResultInformation';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchResultDataService {

  private _matchResultList = new BehaviorSubject<MatchResultInformation>(null);
  matchResultList = this._matchResultList.asObservable();

  constructor() { }

  setMatchResults(data: MatchResultInformation) {
    this._matchResultList.next(data);
  }
}
