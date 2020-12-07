import {Component, OnInit} from '@angular/core';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { removeDialect } from '../../helpers/String';

@Component({
  selector: 'app-work-experience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['workexperience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  componentTitle = 'İş Deneyimleri';

  professionList: Array<string>;
  professionFormControl = new FormControl('', [Validators.required]);
  filteredOptions: Observable<string[]>;

  constructor(private commonService: CommonTaskService) { }

  ngOnInit() {
    this.getProfessionList();
  }

  private _filter(value: string): string[] {
    if (value.length >= 3) {
      const filterValue = removeDialect(value.toLowerCase());
      return this.professionList.filter(option => removeDialect(option.toLowerCase()).includes(filterValue));
    }
  }

  private getProfessionList() {
    this.commonService.getProfessionList().subscribe((data => {
      this.professionList = data;
      this.startFiltering();
    }));
  }

  private startFiltering() {
    this.filteredOptions = this.professionFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
}
