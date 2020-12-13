import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EducationInformation} from '../../models/education-information/EducationInformation';
import {EducationInformationDataService} from '../../services/data/education-information/education-information.data.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-education-information-list',
  templateUrl: './education-information-list.component.html',
  styleUrls: ['education-information-list.component.css']
})
export class EducationInformationListComponent {

  displayedColumns: string[] = ['type', 'university', 'faculty', 'department', 'startDate', 'finishDate', 'action'];
  dataSource: MatTableDataSource<EducationInformation> = new MatTableDataSource<EducationInformation>();
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private dataService: EducationInformationDataService) {
    this.dataService.userEducationInformationList.subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
    });
  }

  deleteEntry(id) {
    this.deleteEvent.emit(id);
  }
}