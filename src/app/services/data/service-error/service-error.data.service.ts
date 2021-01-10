import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PopupCommonModel} from '../../../models/popup/PopupCommonModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceErrorDataService {

  private _serviceError = new BehaviorSubject<PopupCommonModel>(null);
  serviceError = this._serviceError.asObservable();

  constructor() { }

  setServiceError(data: PopupCommonModel) {
    this._serviceError.next(data);
  }
}
