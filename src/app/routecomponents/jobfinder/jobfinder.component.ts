import {Component, OnInit} from '@angular/core';
import {MainNavigationService} from '../../services/navigation/main/main.navigation.service';
import {JobFinderNavigationService} from '../../services/navigation/jobfinder/jobfinder.navigation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-job-finder',
  templateUrl: './jobfinder.component.html',
  styleUrls: ['jobfinder.component.css']
})
export class JobFinderComponent implements OnInit{

  constructor(
    private mainNavigationService: MainNavigationService,
    private flowNavigationService: JobFinderNavigationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    flowNavigationService.event.subscribe(event => {
      // do something
    });
  }

  ngOnInit(): void {
    this.router.navigate([{outlets: {sub: ['contactInformation']}}], {relativeTo: this.route});
  }
}
