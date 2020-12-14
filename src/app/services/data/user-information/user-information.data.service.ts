import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {UserInformation} from '../../../models/user-information/UserInformation';

@Injectable({
  providedIn: 'root'
})
export class UserInformationDataService {

  private _userInformation = new BehaviorSubject<UserInformation>(null);
  userInformation = this._userInformation.asObservable();

  constructor() { }

  setUserInformation(userInformation: UserInformation) {
    this._userInformation.next(userInformation);
  }
}
