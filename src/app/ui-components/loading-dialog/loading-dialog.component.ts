import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoadingDataService} from '../../services/data/loading-service/loading.data.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-loading-dialog',
  templateUrl: './loading-dialog.component.html',
  styleUrls: ['./loading-dialog.component.css']
})
export class LoadingDialogComponent implements OnInit {

  showSpinner = false;

  constructor(private loadingService: LoadingDataService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadingService.showLoadingDialog.subscribe((status) => {
      this.showSpinner = status;
      this.cdr.detectChanges();
    });
  }
}
