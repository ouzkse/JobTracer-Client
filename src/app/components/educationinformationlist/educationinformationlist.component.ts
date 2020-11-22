import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EducationInformation} from '../../models/educationinforamation/EducationInformation';

@Component({
  selector: 'app-education-information-list',
  templateUrl: './educationinformationlist.component.html',
  styleUrls: ['educationinformationlist.component.css']
})
export class EducationInformationListComponent {
  displayedColumns: string[] = ['type', 'university', 'faculty', 'department', 'startDate', 'finishDate', 'action'];

  private _source: Array<EducationInformation>;
  @Input() set source(value: Array<EducationInformation>) {
    this._source = value;
  }
  get source(): Array<EducationInformation> {
    return this._source;
  }

  @Output() deleteEvent = new EventEmitter<number>();

  deleteEntry(id) {
    this.deleteEvent.emit(id);
  }
}
