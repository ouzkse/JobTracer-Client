import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainNavigationService} from '../../services/navigation/main/main.navigation.service';
import {JobFinderNavigationService} from '../../services/navigation/jobfinder/jobfinder.navigation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FlowNavigationEnum} from '../../models/navigation/FlowNavigationEnum';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PopupComponent} from '../../uicomponents/popup/popup.component';
import {PopupCommonModel} from '../../models/common/PopupCommonModel';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-job-finder',
  templateUrl: './jobfinder.component.html',
  styleUrls: ['jobfinder.component.css']
})
export class JobFinderComponent implements OnInit, OnDestroy{

  private subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    private mainNavigationService: MainNavigationService,
    private flowNavigationService: JobFinderNavigationService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.subscriptions.push(
      this.flowNavigationService.event.subscribe(event => {
        if (event == null) {
          this.exitingFlowWarning();
        } else {
          this.navigate(event);
        }
      })
    );
  }

  ngOnInit(): void {
    this.navigate(FlowNavigationEnum.contactInformation);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscriptions => subscriptions.unsubscribe());
  }

  navigate(route: string) {
    this.router.navigate([{outlets: {sub: [route]}}], {relativeTo: this.route, skipLocationChange: true});
  }

  exitingFlowWarning() {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-responsive',
      data: new PopupCommonModel('Uyarı', 'Akış kapanacaktır!', 'İptal et', 'Akışı Kapat')
    };

    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data === 1) { // Right Button
          this.returnToDashboard();
        } else {
          this.dialog.closeAll();
        }
      }
    );
  }

  returnToDashboard() {
    this.dialog.closeAll();
    this.router.dispose();
    this.mainNavigationService.setEvent();
  }
}
