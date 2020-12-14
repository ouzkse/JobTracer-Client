import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingDataService {

  private count = 0;
  private _showLoadingDialog = new BehaviorSubject<boolean>(false);
  showLoadingDialog = this._showLoadingDialog.asObservable();

  constructor() { }

  private evaluateSpinnerStatus() {
    if (this.count > 0) {
      this._showLoadingDialog.next(true);
    } else {
      setTimeout( () => {
        this._showLoadingDialog.next(false);
      }, 1500 ); // Its too fast, no problem with waiting.
    }
  }

  onRequestStart() {
    this.count = this.count + 1;
    this.evaluateSpinnerStatus();
  }

  onResponseReceived() {
    this.count = this.count - 1;
    this.evaluateSpinnerStatus();
  }

  resetLoading() {
    this.count = 0;
    this.evaluateSpinnerStatus();
  }
}
