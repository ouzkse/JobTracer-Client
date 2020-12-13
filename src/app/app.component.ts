import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {PopupComponent} from './uicomponents/popup/popup.component';
import {PopupCommonModel} from './models/common/PopupCommonModel';
import {UserContactInformation} from './models/contactinformation/UserContactInformation';
import {MatchResultInformation} from './models/matchresult/MatchResultInformation';
import {Router} from '@angular/router';
import {MainNavigationService} from './services/navigation/main/main.navigation.service';
import {MainNavigationEnum} from './models/navigation/MainNavigationEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CME4402-SeniorProject-Client';

  result: MatchResultInformation;

  constructor(private mainNavigationService: MainNavigationService, private dialog: MatDialog, private router: Router) {
    this.mainNavigationService.event.subscribe(event => {
      this.evaluateMainNavigationEvent(event);
    });
    // this.result = getDummyResultList();
    // new MatchResultInformation(new Array<MatchResultItem>()); // getDummyResultList();
  }

  private evaluateMainNavigationEvent(event: MainNavigationEnum) {
    if (event != null) {
      this.navigate(event);
    } else {
      this.navigate(MainNavigationEnum.dashboard);
    }
  }

  private navigate(route: string) {
    this.router.navigate([route]);
  }

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
    // this.router.navigate(['dashboard'], {replaceUrl: true, skipLocationChange: true});
  }
}
