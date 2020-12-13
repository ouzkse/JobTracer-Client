import {Component} from '@angular/core';
import {MainNavigationService} from '../../services/navigation/main/main.navigation.service';
import {MainNavigationEnum} from '../../models/navigation/MainNavigationEnum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {

  constructor(private mainNavigationService: MainNavigationService) {
  }

  startJobFindingFlow() {
    this.mainNavigationService.setEvent(MainNavigationEnum.mainFlow);
  }
}
