import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {GlobalVariables} from '../../helpers/GlobalVariables';
import {
  getNumberValueOfMatchingPriority,
  getStringValueOfMatchingPriority,
  getValueOfMatchingPriority
} from '../../models/user-information/MatchingPriority';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  componentTitle = 'Ayarlar';
  applyButtonText = 'Uygula';
  cancelButtonText = 'Vazgeç';

  matchingPriority: string;
  matchingPriorityText = '';

  constructor(private _bottomSheetRef: MatBottomSheetRef<SettingsComponent>) {}

  cancel() {
    this._bottomSheetRef.dismiss();
  }

  apply() {
    GlobalVariables.setMatchingPriority(getValueOfMatchingPriority(this.matchingPriority));
    this._bottomSheetRef.dismiss();
  }

  ngOnInit(): void {
    this.matchingPriority = GlobalVariables.matchingPriority;
    this.matchingPriorityText = getStringValueOfMatchingPriority(GlobalVariables.matchingPriority);
  }

  getMatchingPriority(): number {
    return getNumberValueOfMatchingPriority(this.matchingPriority);
  }

  setMatchingPriority(value: number) {
    this.matchingPriority = value.toString();
    this.matchingPriorityText = getStringValueOfMatchingPriority(value);
  }
}
