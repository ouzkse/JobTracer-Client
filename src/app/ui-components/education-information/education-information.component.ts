import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {UserEducationInformation} from '../../models/education-information/UserEducationInformation';
import {FormControl, Validators} from '@angular/forms';
import {Degree, getDegrees} from '../../models/education-information/Degree';
import {getGraduationYearArray, removeDialect} from '../../helpers/String';
import {University} from '../../models/education-information/University';
import {ReplaySubject, Subject} from 'rxjs';
import {MatSelect} from '@angular/material/select';
import {takeUntil} from 'rxjs/operators';
import {Faculty} from '../../models/education-information/Faculty';
import {Department} from '../../models/education-information/Department';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-information.component.html',
  styleUrls: ['education-information.component.css']
})
export class EducationInformationComponent implements OnDestroy{

  componentTitle = 'Eğitim Bilgileri';
  noEntriesFoundLabel = 'Eşleşme bulunamadı.';
  placeholderLabel = 'Arama';

  higherEducationInfoRequired = false;

  educationDegreeControl = new FormControl('', [Validators.required]);
  educationDegrees = getDegrees();

  graduationYearControl = new FormControl('', [Validators.required]);
  graduationYears = getGraduationYearArray();

  universityCtrl: FormControl = new FormControl('', [Validators.required]);
  universityFilterCtrl: FormControl = new FormControl();
  _filteredUniversity: ReplaySubject<University[]> = new ReplaySubject<University[]>(1);
  @ViewChild('universitySelect', { static: true }) universitySelect: MatSelect;

  facultyCtrl: FormControl = new FormControl('', [Validators.required]);
  facultyFilterCtrl: FormControl = new FormControl();
  _filteredFaculty: ReplaySubject<Faculty[]> = new ReplaySubject<Faculty[]>(1);
  @ViewChild('facultySelect', { static: true }) facultySelect: MatSelect;

  departmentCtrl: FormControl = new FormControl('', [Validators.required]);
  departmentFilterCtrl: FormControl = new FormControl();
  _filteredDepartment: ReplaySubject<Department[]> = new ReplaySubject<Department[]>(1);
  @ViewChild('departmentSelect', { static: true }) departmentSelect: MatSelect;

  universities: University[];
  faculties: Faculty[];
  departments: Department[];

  @Output() educationInformationEvent = new EventEmitter<UserEducationInformation>();

  protected _onDestroy = new Subject<void>();

  constructor(private commonService: CommonTaskService) { }

  private getEducationInformation(): UserEducationInformation {

    const degree = this.educationDegreeControl.value;
    const graduationYear = this.graduationYearControl.value;

    if (this.higherEducationInfoRequired) {
      return new UserEducationInformation(
        degree,
        graduationYear,
        this.universityCtrl.value,
        this.facultyCtrl.value,
        this.departmentCtrl.value
      );
    } else {
      return new UserEducationInformation(degree, graduationYear, null, null, null);
    }
  }

  selectDegree(selectedDegree: Degree) {
    console.log(selectedDegree);
    if (selectedDegree.id <= 2) {
      this.higherEducationInfoRequired = false;
    } else {
      this.higherEducationInfoRequired = true;
      this.getUniversityList();
    }
  }

  selectUniversity(selectedUniversity: University) {
    console.log(selectedUniversity);
    this.getFacultyList(selectedUniversity.id);
  }

  selectFaculty(selectedFaculty: Faculty) {
    console.log(selectedFaculty);
    this.getDepartmentList(selectedFaculty.uniId, selectedFaculty.id);
  }

  private getUniversityList() {
    this.commonService.getUniversities().subscribe(data => {
      this.universities = data;
      this._filteredUniversity.next(this.universities);
      this.setUniversityObserver();
    });
  }

  private getFacultyList(universityId: string) {
    this.commonService.getFaculties(universityId).subscribe(data => {
      this.faculties = data;
      this._filteredFaculty.next(this.faculties);
      this.setFacultyObserver();
    });
  }

  private getDepartmentList(universityId: string, facultyId: string) {
    this.commonService.getDepartments(universityId, facultyId).subscribe(data => {
      this.departments = data;
      this._filteredDepartment.next(this.departments);
      this.setDepartmentObserver();
    });
  }

  private setUniversityObserver() {
    this.universityFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterUniversities();
      });
  }

  private setFacultyObserver() {
    this.facultyFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterFaculties();
      });
  }

  private setDepartmentObserver() {
    this.departmentFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDepartments();
      });
  }

  protected filterUniversities() {
    if (!this.universities) {
      return;
    }

    let search = this.universityFilterCtrl.value;
    if (!search) {
      this._filteredUniversity.next(this.universities.slice());
      return;
    } else {
      search = removeDialect(search.toLowerCase());
    }

    // There is a problem with remove dialect function, or localization of İ/I
    this._filteredUniversity.next(
      this.universities.filter(university => removeDialect(university.name.toLowerCase()).includes(search))
    );
  }

  protected filterFaculties() {
    if (!this.faculties) {
      return;
    }

    let search = this.facultyFilterCtrl.value;
    if (!search) {
      this._filteredFaculty.next(this.faculties.slice());
      return;
    } else {
      search = removeDialect(search.toLowerCase());
    }

    // There is a problem with remove dialect function, or localization of İ/I
    this._filteredFaculty.next(
      this.faculties.filter(faculty => removeDialect(faculty.name.toLowerCase()).includes(search))
    );
  }

  protected filterDepartments() {
    if (!this.departments) {
      return;
    }

    let search = this.departmentFilterCtrl.value;
    if (!search) {
      this._filteredDepartment.next(this.departments.slice());
      return;
    } else {
      search = removeDialect(search.toLowerCase());
    }

    // There is a problem with remove dialect function, or localization of İ/I
    this._filteredDepartment.next(
      this.departments.filter(department => removeDialect(department.name.toLowerCase()).includes(search))
    );
  }

  checkValidations() {
    const initialValidationStatus = !this.graduationYearControl.invalid && !this.educationDegreeControl.invalid;

    if (!this.higherEducationInfoRequired) {
      return initialValidationStatus;
    } else {
      return initialValidationStatus && !this.departmentCtrl.invalid && !this.universityCtrl.invalid && !this.facultyCtrl.invalid;
    }
  }

  emitUserEducationInformation() {
    console.log(this.getEducationInformation());
    this.educationInformationEvent.emit(this.getEducationInformation());
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
