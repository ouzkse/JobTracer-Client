import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {PopupComponent} from './ui-components/popup/popup.component';
import {PopupCommonModel} from './models/common/PopupCommonModel';
import {UserContactInformation} from './models/contact-information/UserContactInformation';
import {Router} from '@angular/router';
import {MainNavigationService} from './services/navigation/main/main.navigation.service';
import {MainNavigationEnum} from './models/navigation/MainNavigationEnum';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import {MatchResultDataService} from './services/data/match-result/match-result.data.service';
import {getMatchResultList} from './models/match-result/MatchResultInformation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3, 1 => 3', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', height: '100%', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('3 => 2, 2 => 1, 3 => 1, 3 => 2', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', height: '100%', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
    ])
  ]
})
export class AppComponent implements OnInit{

  title = 'CME4402-SeniorProject-Client';

  constructor(
    private mainNavigationService: MainNavigationService,
    private dialog: MatDialog,
    private router: Router,
    // private dataService: MatchResultDataService
  ) {
    this.mainNavigationService.event.subscribe(event => {
      this.evaluateMainNavigationEvent(event);
    });

    // dataService.setMatchResultItems(getMatchResultList());
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

  getDepth(outlet) {
    return outlet.activatedRouteData.depth;
  }
}
