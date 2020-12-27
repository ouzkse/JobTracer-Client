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
import {ReplaySubject, Subscription} from 'rxjs';
import {UserInformation} from '../../models/user-information/UserInformation';
import {take} from 'rxjs/operators';
import {MatchResultDataService} from '../../services/data/match-result/match-result.data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  componentTitle = 'Arama Sonuçları';

  _isLoaded: Promise<boolean>;
  serviceCalled = false;
  // _resultList: ReplaySubject<MatchResultItem[]> = new ReplaySubject<MatchResultItem[]>(1);

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
      this.commonService.getResultList(data).subscribe(resultList => {
        this.matchResultDataService.setMatchResultItems(resultList);
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
