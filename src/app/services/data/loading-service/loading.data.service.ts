import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingDataService {

  private count = 0;
  private _showLoadingDialog = new BehaviorSubject<boolean>(false);
  showLoadingDialog = this._showLoadingDialog.asObservable();

  constructor() { }

  private evaluateSpinnerStatus(showDelay: boolean) {
    if (this.count > 0) {
      this._showLoadingDialog.next(true);
    } else {

      let waitingDuration = 700;
      if (!showDelay) { waitingDuration = 0; }

      setTimeout( () => {
        this._showLoadingDialog.next(false);
      }, waitingDuration); // Its too fast, no problem with waiting.
    }
  }

  onRequestStart() {
    this.count = this.count + 1;
    this.evaluateSpinnerStatus(true);
  }

  onResponseReceived() {
    this.count = this.count - 1;
    this.evaluateSpinnerStatus(true);
  }

  resetLoading() {
    this.count = 0;
    this.evaluateSpinnerStatus(false);
  }
}
