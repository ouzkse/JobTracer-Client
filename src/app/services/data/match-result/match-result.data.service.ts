import {Injectable} from '@angular/core';
import {MatchResultInformation} from '../../../models/match-result/MatchResultInformation';
import {BehaviorSubject} from 'rxjs';

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
