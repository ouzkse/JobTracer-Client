import {Component, Inject} from '@angular/core';
import {PopupCommonModel} from '../../models/common/PopupCommonModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  componentData: PopupCommonModel;

  private leftButton = 0;
  private rightButton = 1;

  constructor(
    private dialogReference: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData
  ) {
    this.componentData = dialogData;
  }

  close(buttonId) {
    this.dialogReference.close(buttonId);
  }
}
