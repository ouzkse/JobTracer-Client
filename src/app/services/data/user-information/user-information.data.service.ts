import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {UserInformation} from '../../../models/userinformation/UserInformation';

@Injectable({
  providedIn: 'root'
})
export class UserInformationDataService {

  private _userInformation = new Subject<UserInformation>();
  userInformation = this._userInformation.asObservable();

  constructor() { }

  setUserInformation(userInformation: UserInformation) {
    this._userInformation.next(userInformation);
  }
}
