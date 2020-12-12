import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {FlowNavigationEnum} from '../../../models/navigation/FlowNavigationEnum';

@Injectable({
  providedIn: 'root'
})
export class JobFinderNavigationService {

  private _event = new Subject<FlowNavigationEnum>();
  event = this._event.asObservable();

  constructor() { }

  setEvent(eventValue: FlowNavigationEnum = FlowNavigationEnum.contactInformation) {
    this._event.next(eventValue);
  }
}
