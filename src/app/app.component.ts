import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {PopupComponent} from './components/popup/popup.component';
import {PopupCommonModel} from './models/common/PopupCommonModel';
import {UserContactInformation} from './models/contactinformation/UserContactInformation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CME4402-SeniorProject-Client';

  constructor(private dialog: MatDialog) { }

  openPopupComponent() {
    this.openDialog(PopupComponent);
  }

  private openDialog(component: ComponentType<any>) {
    const dialogConfig: MatDialogConfig = {
     panelClass: 'dialog-responsive',
     data: new PopupCommonModel('Uyarı', 'Description Text', '', 'Tamam')
    };

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }

  logEmittedValue(value: UserContactInformation) {
    console.log(value);
  }

  ngOnInit(): void {
  }
}
