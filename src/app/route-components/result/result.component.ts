import {Component, OnInit} from '@angular/core';
import {UserInformationDataService} from '../../services/data/user-information/user-information.data.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PopupCommonModel} from '../../models/popup/PopupCommonModel';
import {PopupComponent} from '../../ui-components/popup/popup.component';
import {MainNavigationService} from '../../services/navigation/main/main.navigation.service';
import {MainNavigationEnum} from '../../models/navigation/MainNavigationEnum';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {MatchResultButtonEnum} from '../../models/match-result/MatchResultButtonEnum';
import {UserInformation} from '../../models/user-information/UserInformation';
import {take} from 'rxjs/operators';
import {MatchResultDataService} from '../../services/data/match-result/match-result.data.service';
import {PopupModelId} from '../../models/popup/PopupModelId';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  componentTitle = 'Arama Sonuçları';

  _isLoaded: Promise<boolean>;
  serviceCalled = false;

  constructor(
    private userInformationDataService: UserInformationDataService,
    private dialog: MatDialog,
    private mainNavigationService: MainNavigationService,
    private commonService: CommonTaskService,
    private matchResultDataService: MatchResultDataService
  ) {
  }

  ngOnInit(): void {
    this.userInformationDataService.userInformation.pipe(take(1)).subscribe(data => {
      console.log(JSON.stringify(data));
      if (data == null) {
        this.openDialog();
      } else {
        this.getMatchResults(data);
      }
    });
  }

  private getMatchResults(data: UserInformation) {
    if (!this.serviceCalled) {
      this.serviceCalled = true;
      this.commonService.getResultList(data).subscribe(result => {
        this.matchResultDataService.setMatchResults(result);
        this.userInformationDataService.setUserInformation(null);
        this._isLoaded = Promise.resolve(true);
      });
    }
  }

  private openDialog() {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-responsive',
      hasBackdrop: true,
      disableClose: true,
      data: new PopupCommonModel(PopupModelId.default, 'Uyarı', 'Anasayfaya yönlendirileceksiniz', '', 'Tamam')
    };

    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      _ => this.mainNavigationService.setEvent(MainNavigationEnum.dashboard)
    );
  }

  evaluateButtonAction(event) {
    if (event === MatchResultButtonEnum.backToDashboard) {
      this.mainNavigationService.setEvent(MainNavigationEnum.dashboard);
    }
  }

}
