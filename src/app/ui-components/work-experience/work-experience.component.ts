import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {FormControl, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {removeDialect} from '../../helpers/String';
import {KeyValuePair} from '../../models/common/KeyValuePair';
import {UserWorkExperience} from '../../models/work-experience-information/UserWorkExperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  componentTitle = 'İş Deneyimleri';

  @Output() workExperienceEvent = new EventEmitter<UserWorkExperience>();

  professionList: Array<string>;
  professionFormControl = new FormControl('', [
    Validators.required,
    this.requireMatch.bind(this)
  ]);
  filteredOptions: Observable<string[]>;

  professionYearControl = new FormControl('', [Validators.required]);

  experienceChipList: KeyValuePair[] = [];
  experienceFormControl = new FormControl();
  experienceIdCount = 0;

  constructor(private commonService: CommonTaskService) { }

  ngOnInit() {
    this.getProfessionList();
  }

  private _filter(value: string): string[] {
    if (value.length >= 3) {
      const filterValue = removeDialect(value.toLocaleLowerCase('tr'));
      return this.professionList.filter(option => removeDialect(option.toLocaleLowerCase('tr')).includes(filterValue));
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

  addExperience() {
    const text = this.experienceFormControl.value;
    if (text.length > 0) {
      this.experienceChipList.push({key: this.experienceIdCount, value: text});
      this.experienceIdCount = this.experienceIdCount + 1;
      this.experienceFormControl.setValue('');
      console.log(this.experienceChipList);
    }
  }

  removeExperience(id: number) {
    this.experienceChipList = this.experienceChipList.filter( x => x.key !== id);
  }

  onBackPressed() {
    console.log('On Back Pressed - Work Experience');
  }

  isValidationsValid() {
    return !this.professionFormControl.invalid && this.experienceChipList.length >= 3 && !this.professionYearControl.invalid;
  }

  emitUserExperiences() {
    const workExperiences = new UserWorkExperience(
      this.professionFormControl.value,
      this.experienceChipList.map(x => x.value),
      this.professionYearControl.value
    );
    console.log(JSON.stringify(workExperiences));
    this.workExperienceEvent.emit(workExperiences);
  }

  private requireMatch(control: FormControl): ValidationErrors | null {
    const selection: string = control.value;
    if (selection.length === 0 || selection.length < 3) {
      return null;
    }
    if (this.professionList && this.professionList.indexOf(selection) < 0) {
      return { requireMatch: true };
    }
    return null;
  }
}
