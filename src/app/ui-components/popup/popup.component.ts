import {Component, Inject} from '@angular/core';
import {PopupCommonModel} from '../../models/popup/PopupCommonModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PopupResultModel} from '../../models/popup/PopupResultModel';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  componentData: PopupCommonModel;

  leftButton = 0;
  rightButton = 1;

  constructor(
    private dialogReference: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData
  ) {
    this.componentData = dialogData;
  }

  close(buttonId) {
    this.dialogReference.close(
      new PopupResultModel(buttonId, this.componentData.id)
    );
  }
}
