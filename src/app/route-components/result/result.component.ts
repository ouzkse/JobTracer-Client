import {Component, OnInit} from '@angular/core';
import {UserInformationDataService} from '../../services/data/user-information/user-information.data.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PopupCommonModel} from '../../models/common/PopupCommonModel';
import {PopupComponent} from '../../ui-components/popup/popup.component';
import {MainNavigationService} from '../../services/navigation/main/main.navigation.service';
import {MainNavigationEnum} from '../../models/navigation/MainNavigationEnum';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {MatchResultItem} from '../../models/match-result/MatchResultInformation';
import {MatchResultButtonEnum} from '../../models/match-result/MatchResultButtonEnum';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  resultList: Array<MatchResultItem> = null;

  constructor(
    private userInformationDataService: UserInformationDataService,
    private dialog: MatDialog,
    private mainNavigationService: MainNavigationService,
    private commonService: CommonTaskService
  ) {
  }

  ngOnInit(): void {
    this.userInformationDataService.userInformation.subscribe(data => {
      console.log(JSON.stringify(data));
      if (data == null && this.resultList == null) {
        this.openDialog();
        console.log('result component');
        console.log(data);
      } else {
        this.commonService.getResultList(data).subscribe(result => {
          this.resultList = result.matchResultArray;
          this.userInformationDataService.setUserInformation(null);
        });
      }
    });
  }

  private openDialog() {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-responsive',
      hasBackdrop: true,
      disableClose: true,
      data: new PopupCommonModel('Uyarı', 'Anasayfaya yönlendirileceksiniz', '', 'Tamam')
    };

    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.mainNavigationService.setEvent(MainNavigationEnum.dashboard)
    );
  }

  evaluateButtonAction(event) {
    if (event === MatchResultButtonEnum.backToDashboard) {
      this.mainNavigationService.setEvent(MainNavigationEnum.dashboard);
    }
  }

}
