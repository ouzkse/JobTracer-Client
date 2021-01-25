import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {PopupComponent} from './ui-components/popup/popup.component';
import {PopupCommonModel} from './models/popup/PopupCommonModel';
import {UserContactInformation} from './models/contact-information/UserContactInformation';
import {Router} from '@angular/router';
import {MainNavigationService} from './services/navigation/main/main.navigation.service';
import {MainNavigationEnum} from './models/navigation/MainNavigationEnum';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {ServiceErrorDataService} from './services/data/service-error/service-error.data.service';
import {PopupModelId} from './models/popup/PopupModelId';
import {UserInformation} from './models/user-information/UserInformation';

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
    private errorDataService: ServiceErrorDataService,
    private dialog: MatDialog,
    private router: Router,
    // private dataService: UserInformationDataService
  ) {
    this.mainNavigationService.event.subscribe(event => {
      this.evaluateMainNavigationEvent(event);
    });

    this.errorDataService.serviceError.subscribe(error => {
      this.evaluateError(error);
    });

    // this.dataService.setUserInformation(this.createTestSubject());
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

  private openDialog(component: ComponentType<any>, model: PopupCommonModel) {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-responsive',
      data: model,
      hasBackdrop: true,
      disableClose: true
    };

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log('Dialog output:', data);
        this.errorDataService.setServiceError(null);
        if (data.popupId === PopupModelId.serviceError) {
          this.navigate(MainNavigationEnum.dashboard);
        }
      }
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

  private evaluateError(error: PopupCommonModel) {
    // haha
    if (error != null) {
      this.openDialog(PopupComponent, error);
    }
  }

  private createTestSubject(): UserInformation {
    const str = '{\n' +
      '   "contactInformation":{\n' +
      '      "emailAddress":"oguzkose11@gmail.com",\n' +
      '      "dateOfBirth":"2002-12-01T22:00:00.000Z",\n' +
      '      "city":[\n' +
      '         {\n' +
      '            "cityName":"** Tüm Türkiye",\n' +
      '            "zipCode":"66"\n' +
      '         }\n' +
      '      ]\n' +
      '   },\n' +
      '   "personalInformation":{\n' +
      '      "gender":{\n' +
      '         "type":1,\n' +
      '         "name":"Erkek"\n' +
      '      },\n' +
      '      "militaryServiceStatus":"Yaptım",\n' +
      '      "driverLicence":[\n' +
      '         "B",\n' +
      '         "C",\n' +
      '         "D"\n' +
      '      ]\n' +
      '   },\n' +
      '   "educationInformation":{\n' +
      '      "degree":"lise mezunu",\n' +
      '      "graduationYear":"2020",\n' +
      '      "university":null,\n' +
      '      "faculty":null,\n' +
      '      "department":null\n' +
      '   },\n' +
      '   "foreignLanguageInformation":[\n' +
      '\n' +
      '   ],\n' +
      '   "workExperiences":{\n' +
      '      "profession":"Kasiyer",\n' +
      '      "experiences":[\n' +
      '         "Kasiyerlik yaptım",\n' +
      '         "mükemmelim",\n' +
      '         "iyiyim"\n' +
      '      ],\n' +
      '      "totalExperience":12\n' +
      '   },\n' +
      '   "matchingPriority": "LOW"\n' +
      '}';
    const info = JSON.parse(str);
    console.log(info);
    return info;
  }
}
