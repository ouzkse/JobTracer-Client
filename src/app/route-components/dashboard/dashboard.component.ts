import {Component} from '@angular/core';
import {MainNavigationService} from '../../services/navigation/main/main.navigation.service';
import {MainNavigationEnum} from '../../models/navigation/MainNavigationEnum';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material/bottom-sheet';
import {SettingsComponent} from '../../ui-components/settings/settings.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private mainNavigationService: MainNavigationService,
    private bottomSheet: MatBottomSheet
  ) {
  }

  startJobFindingFlow() {
    this.mainNavigationService.setEvent(MainNavigationEnum.mainFlow);
  }

  openSettingsBottomSheet() {
    const sheetConfig: MatBottomSheetConfig = {
      panelClass: 'sheet-responsive',
      hasBackdrop: true,
      disableClose: true,
    };

    this.bottomSheet.open(SettingsComponent, sheetConfig);
  }
}
