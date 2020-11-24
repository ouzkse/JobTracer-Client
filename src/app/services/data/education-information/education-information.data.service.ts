import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {EducationInformation} from '../../../models/educationinforamation/EducationInformation';

@Injectable({
  providedIn: 'root'
})
export class EducationInformationDataService {

  private _userEducationInformationList = new Subject<Array<EducationInformation>>();
  userEducationInformationList = this._userEducationInformationList.asObservable();

  constructor() { }

  setUserEducationInformation(data: Array<EducationInformation>) {
    this._userEducationInformationList.next(data);
  }
}
